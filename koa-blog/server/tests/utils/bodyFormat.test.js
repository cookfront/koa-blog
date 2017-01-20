var should = require('should');
var bodyFormat = require('../../src/utils/bodyFormat');

describe('response body format test', function() {
  it('should return success true', function() {
    bodyFormat.formatSuccessBody('success data').should.deepEqual({
      success: true,
      data: 'success data'
    });
  });

  it('should return success true with another data key', function() {
    bodyFormat.formatSuccessBody('success data', 'key').should.deepEqual({
      success: true,
      key: 'success data'
    });
  });

  it('should return success false', function() {
    bodyFormat.formatErrorBody('error message').should.deepEqual({
      success: false,
      message: 'error message'
    });
  });
});
