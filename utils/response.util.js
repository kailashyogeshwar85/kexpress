const ResponseUtil = module.exports = { };

ResponseUtil.sendSuccessResponse = (res, data) => {
  res.json({
    message: 'Success',
    data,
    error: false
  })
}

ResponseUtil.sendUnauthorized = (res) => {
  res.status(400).json({
    message: 'Unauthorized',
    data: { },
    error: 401,
  });
}

ResponseUtil.sendErrorResponse = (res, { code, message }) => {
  res.status(400).json({
    message,
    data: { },
    error: code,
  })
}