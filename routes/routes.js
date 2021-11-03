const express = require('express');
const clusterRoute = require('./cluster.routes');
const queryRoute = require('./query.routes');

const router = express.Router();

router.use('/cluster', clusterRoute);
router.use('/query', queryRoute);

module.exports = router;