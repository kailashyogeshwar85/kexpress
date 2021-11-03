const ResponseUtils = require('../utils/response.util');
const QueryService = require('../services/query.service');

const QueryController = module.exports = { };

QueryController.execute = async function (req, res) {
  try {
    const data = await QueryService.execute(req.body);
    // check if response is stream handle it differently
    if (data.pipe) {
      return data.pipe(res);
    }
    ResponseUtils.sendSuccessResponse(res, data);
  } catch (error) {
    console.log('error ', error);
    ResponseUtils.sendErrorResponse(res, error);
  }
}