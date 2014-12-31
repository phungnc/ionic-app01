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
  .controller('RanksController',['$scope', '$stateParams', 'Ranks' ,'$sce',  function($scope, $stateParams, Ranks, $sce) {

    $scope.ranks = Ranks.query(function(ranks){
      $scope.level0 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level0);
      $scope.level1 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level1);
      $scope.level2 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level2);
      $scope.level3 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level3);
      $scope.level4 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level4);
      $scope.level5 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level5);
    });

    $scope.rankId = $stateParams.rankId;
  }])

  .controller('RankModalController',['$scope', '$ionicModal','$sce', function($scope, $ionicModal, $sce) {

    //$scope.rank = Ranks.get({rankId: $stateParams.rankId});

    $ionicModal.fromTemplateUrl('templates/rank-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function(level, levelId) {

      //$scope.level = level;
      $scope.levelId = levelId;
      $scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml(level);
      $scope.modal.show();

    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //$ionicModal.fromTemplateUrl('templates/rank-modal.html', function(modal) {
    //  $scope.modal = modal;
    //}, {
    //  animation: 'slide-in-up'
    //});

  }]);
