'use strict';

angular.module('finalt3App')
  .controller('MainCtrl', function ($scope, $http, $window) {
    $scope.awesomeThings = [];

    $http.get('/api/list').then(function(response) {
      $scope.participants = response.data;
    });

    $scope.delete = function (id) {
      if (id) {
        $http.get('/api/delete?id=' + id).then(function (response) {
          if (response.data == 1) {
            alert("Borrado correctamente");
            $window.location.reload();
          } else {
            alert("Error, intente nuevamente");
          }
        });
      }
    }
  });
