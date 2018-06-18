'use strict';

angular.module('finalt3App')
  .controller('AddCtrl', function ($scope, $http) {
    $scope.name = '';
    $scope.add = function () {
      if ($scope.name != '') {
        $http.get('/api/add?name=' + $scope.name).then(function (response) {
          if (response.data == 1) {
            alert("Agregado correctamente");
          } else {
            alert("Error, intente nuevamente");
          }
        });
      }
    };
  });
