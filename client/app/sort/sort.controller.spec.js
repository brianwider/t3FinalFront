'use strict';

describe('Controller: SortCtrl', function () {

  // load the controller's module
  beforeEach(module('finalt3App'));

  var SortCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SortCtrl = $controller('SortCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
