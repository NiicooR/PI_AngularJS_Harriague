'use strict';

describe('Directive: emojis', function () {

  // load the directive's module
  beforeEach(module('freeReviewsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<emojis></emojis>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the emojis directive');
  }));
});
