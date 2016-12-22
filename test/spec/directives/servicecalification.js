'use strict';

describe('Directive: serviceCalification', function () {

  // load the directive's module
  beforeEach(module('freeReviewsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<service-calification></service-calification>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the serviceCalification directive');
  }));
});
