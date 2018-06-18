'use strict';

angular.module('finalt3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl'
      });
  });