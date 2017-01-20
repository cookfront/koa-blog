/**
 * 格式化成功的返回请求
 */
exports.formatSuccessBody = function(data, key = 'data') {
  return {
    success: true,
    [key]: data
  };
};

/**
 * 格式化失败的返回请求
 */
exports.formatErrorBody = function(message) {
  return {
    success: false,
    message: message
  };
}
