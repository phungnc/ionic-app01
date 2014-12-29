angular.module('app.services', ['ngResource'])
  .factory('Employees', function ($resource) {
    return $resource('http://demo1963560.mockable.io/employees/:employeeId/:data')
  })
  .factory('Ranks', function ($resource) {
    return $resource('http://demo1963560.mockable.io/employees/:rankId')
  });
