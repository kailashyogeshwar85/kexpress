const ResponseUtils = require('../utils/response.util');
const ClusterService = require('../services/cluster.service');

const ClusterController = module.exports = { };

ClusterController.getClusterInfo = async (req, res) => {
  try {
    const data = await ClusterService.getClusterInfo();
    ResponseUtils.sendSuccessResponse(res, data);
  } catch(error) {
    ResponseUtils.sendErrorResponse(res, error);
  }
}

ClusterController.getAllNodes = async (req, res) => {
  try {
    const data = await ClusterService.getAllNodes();
    ResponseUtils.sendSuccessResponse(res, data);
  } catch (error) {
    ResponseUtils.sendErrorResponse(res, error);
  }
}