'use strict';

angular.module('finalt3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('winners', {
        url: '/winners',
        templateUrl: 'app/winners/winners.html',
        controller: 'WinnersCtrl'
      });
  });