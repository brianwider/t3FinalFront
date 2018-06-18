'use strict';

angular.module('finalt3App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Lista de participantes',
        'link': '/'
      },
      {
        'title': 'Agregar participante',
        'link': '/add'
      },
      {
        'title': 'Sortear',
        'link': '/sort'
      },
      {
        'title': 'Lista de ganadores',
        'link': '/winners'
      },
      {
        'title': 'Generar CSV de ganadores',
        'link': 'http://localhost:9000/api/winners/csv'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });