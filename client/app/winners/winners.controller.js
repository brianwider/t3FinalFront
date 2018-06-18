'use strict';

angular.module('finalt3App')
  .controller('WinnersCtrl', function ($scope, $http) {

    $http.get('/api/winners').then(function (response) {
      $scope.winners = response.data;
    });
  });
