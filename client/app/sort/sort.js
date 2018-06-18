'use strict';

angular.module('finalt3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sort', {
        url: '/sort',
        templateUrl: 'app/sort/sort.html',
        controller: 'SortCtrl'
      });
  });