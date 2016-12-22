'use strict';

describe('Directive: reviewPost', function () {

  // load the directive's module
  beforeEach(module('freeReviewsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<review-post></review-post>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the reviewPost directive');
  }));
});
