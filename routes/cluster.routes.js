const express = require('express');
const clusterController = require('../controllers/cluster.controller');

const clusterRouter = express.Router() ;

clusterRouter.get('/', (req, res) => {
  res.send('Cluster Route');
});

clusterRouter.get('/clusterInfo', clusterController.getClusterInfo);

clusterRouter.get('/getAllNodes', clusterController.getAllNodes);

module.exports = clusterRouter;