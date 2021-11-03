
const axios = require('axios');
const API = module.exports = { };
const Config = require('../constants/config.constants');

axios.interceptors.request.use(function (config) {
  config.baseURL = Config.KSQLDB_API_BASE_URL,
  config.headers = {
    'user-agent': 'ksqldb-express',
    'content-type': 'application/json',
    'Accept': 'application/vnd.ksql.v1+json; q=0.9, application/json; q=0.5',
  };
  return config;
});

API.sendRequest = async function (requestOptions) {
  return axios.request(requestOptions)
  .then(response => response.data)
  .catch(err => {
    if (err.response.status !== 400) {
      throw new Error('Unable to Connect KsqlDB Server');
    }
    throw err.response.data;
  });
};
