const BB = require('bluebird');
const API = require('../utils/api.util');
const ClusterService = module.exports = { };
const NetworkConstants = require('../constants/network.constants');

ClusterService.getClusterInfo = async () => {
  try {
    const requestOptions = {
      url: '/info',
      method: 'GET'
    };
    const result = await API.sendRequest(requestOptions);
    return result;
  } catch(e) {
    console.log(e);
    throw NetworkConstants.FAILED_TO_FETCH_CLUSTER_INFO;
  }
}

ClusterService.getAllNodes = async () => {
  try {
    const queries = ['SHOW STREAMS;', 'SHOW TABLES EXTENDED;', 'SHOW TOPICS EXTENDED;'];
    const nodes = {
      streams: queries[0],
      tables: queries[1],
      topics: queries[2]
    };

    const responseData = { };

    const resp = await BB.map(Object.keys(nodes), node => {
      const requestOptions = {
        url: '/ksql',
        method: 'POST',
        data: { ksql: nodes[node] }
      };
      return API.sendRequest(requestOptions)
      .then(result => {
        responseData[node] = result;
      });
    }, { concurrency: 3 })
    .then(result => {
      return responseData;
    });
    return resp;
  } catch(e) {
    console.log(e);
    throw NetworkConstants.FAILED_TO_EXECUTE_STATEMENT;
  }
}