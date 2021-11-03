const API = require('../utils/api.util');
const QueryService = module.exports = { };
const NetworkConstants = require('../constants/network.constants');

QueryService.execute = async (body) => {
  const query = body.query;
  const streamProperties = body.streamProperties || {
    "ksql.streams.auto.offset.reset": "earliest"
  };
  const pushQueryRegex = /(EMIT CHANGES;)/i;

  let path = '/ksql';
  const optionsOverride = {}
  const matched = query.match(pushQueryRegex);
  if ( matched && matched.length ) {
    optionsOverride.url = '/query'
    optionsOverride.responseType = 'stream'
  }

  try {
    const requestOptions = {
      url: path,
      method: 'POST',
      data: { ksql: query, streamProperties },
    };

    const result = await API.sendRequest({
      ...requestOptions,
      ...optionsOverride
    });
    result.on('data', console.log);
    return result;
  } catch(e) {
    console.log(e);
    throw e;
  }
}