const express = require('express');
const queryController = require('../controllers/query.controller');
const queryRouter = express.Router() ;

queryRouter.get('/', (req, res) => {
  res.send('Query Execution Route');
});

queryRouter.post('/execute', queryController.execute);

module.exports = queryRouter;