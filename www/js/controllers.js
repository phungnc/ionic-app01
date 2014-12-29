angular.module('app.controllers', [])
  .controller('EmployeesController', function($scope, Employees) {
    $scope.searchKey = "";

    $scope.employees = Employees.query();

  })
  .controller('EmployeeController', function($scope, $stateParams, Employees) {
    $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
  })
  .controller('EmployeeRankController', function($scope, $stateParams, Employees) {
    $scope.rank = Employees.get({employeeId: $stateParams.employeeId, data: 'rank'});
  });
