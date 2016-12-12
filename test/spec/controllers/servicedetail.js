'use strict';

describe('Controller: ServicedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('freeReviewsApp'));

  var ServicedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicedetailCtrl = $controller('ServicedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServicedetailCtrl.awesomeThings.length).toBe(3);
  });
});
