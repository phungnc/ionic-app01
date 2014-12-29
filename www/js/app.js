// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers', 'app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('/', {
          url: '/',
          templateUrl: 'templates/list.html',
          controller: 'EmployeesController'
        })

        .state('employees', {
          url: '/employees',
          templateUrl: 'templates/list.html',
          controller: 'EmployeesController'
        })

        .state('item', {
          url: '/employees/:employeeId',
          templateUrl: 'templates/item.html',
          controller: 'EmployeeController'
        })

        .state('rank', {
          url: '/employees/:employeeId/rank',
          templateUrl: 'templates/rank.html',
          controller: 'EmployeeRankController'
        })

    $urlRouterProvider.otherwise('/');

});
