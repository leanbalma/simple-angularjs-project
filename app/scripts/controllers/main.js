'use strict';

/**
 * @ngdoc function
 * @name simpleAngularjsProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleAngularjsProjectApp
 */
angular.module('simpleAngularjsProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
