'use strict';

describe('Service: getService', function () {

  // load the service's module
  beforeEach(module('freeReviewsApp'));

  // instantiate service
  var getService;
  beforeEach(inject(function (_getService_) {
    getService = _getService_;
  }));

  it('should do something', function () {
    expect(!!getService).toBe(true);
  });

});
