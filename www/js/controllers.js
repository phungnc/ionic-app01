angular.module('app.controllers', [])
  .controller('EmployeesController', function($scope, Employees) {
    //$scope.searchKey = "";
    $scope.employees = Employees.query();
  })
  .controller('EmployeeController', function($scope, $stateParams, Employees) {
    $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
  })
  .controller('EmployeeRankController', function($scope, $stateParams, Employees) {
    $scope.employeeRank = Employees.get({employeeId: $stateParams.employeeId, data: 'rank'});
  })
  .controller('RanksController', function($scope, $stateParams, Ranks) {
    $scope.ranks = Ranks.query();
    $scope.rankId = $stateParams.rankId;
  })

  .controller('RankModalController', function($scope, $ionicModal) {

    //$scope.rank = Ranks.get({rankId: $stateParams.rankId});

    $scope.openModal = function(level) {
      $scope.level = level;
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/rank-modal.html', function(modal) {
      $scope.modal = modal;
    }, {
      animation: 'slide-in-up'
    });

  });
