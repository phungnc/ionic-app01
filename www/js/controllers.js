angular.module('app.controllers', [])
  .controller('EmployeesController', function($scope, Employees) {
    $scope.searchKey = "";

    $scope.employees = Employees.query();

  })
