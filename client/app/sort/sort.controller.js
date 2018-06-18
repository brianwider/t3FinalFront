'use strict';

angular.module('finalt3App')
  .controller('SortCtrl', function ($scope, $http) {
    $scope.winner = '';
    $scope.sort = function () {
      $http.get('/api/random').then(function (response) {
        $scope.winner = response.data.name;
      });
    };
  });
