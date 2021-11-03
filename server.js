const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Config = require('./constants/config.constants');
const ksqlExpressApp = require('./app');
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log('Request came for ', req.url, req.method);
  next();
});

// app.post('/query/execute', async (req, res) => {
//   try {
//     const response = await axios.request({
//       url: `${Config.KSQLDB_API_BASE_URL}/ksql`,
//       method: 'post',
//       headers: {
//         'user-agent': 'ksqldb-express',
//         'content-type': 'application/json',
//         'Accept': 'application/vnd.ksql.v1+json; q=0.9, application/json; q=0.5',
//       },
//       data: {
//         ksql: req.body.data.ksql,
//       }
//     });
//     res.json({
//       status: 'Success',
//       error: null,
//       data: response.data,
//     });
//   } catch(e) {
//     console.log('exception ', e.toJSON());
//     res.json(e);
//   }
// });

// app.get('/clusterInfo', async (req, res) => {

// });

ksqlExpressApp.bootStrap(app);

module.exports = {
  app
};

