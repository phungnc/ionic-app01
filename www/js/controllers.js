var app = angular.module('app.controllers', ['ui.radialplot'])

  app.controller('EmployeesController', function($scope, Employees) {
    //$scope.searchKey = "";
    $scope.employees = Employees.query();
  })
  .controller('EmployeeController', function($scope, $stateParams, Employees) {
    $scope.employee = Employees.get({employeeId: $stateParams.employeeId}, function(employee) {



    $scope.dataset_a =  {
      d0: { id: 0, name: 'Technical', value: parseInt(employee.competencies[0].level) - 2 },
      d1: { id: 1, name: 'Autonomous', value: parseInt(employee.competencies[1].level)  },
      d2: { id: 2, name: 'Leadership', value: parseInt(employee.competencies[2].level) },
      d3: { id: 3, name: 'Communication', value: parseInt(employee.competencies[3].level) },
      d4: { id: 4, name: 'Training', value: parseInt(employee.competencies[4].level)  },
      d5: { id: 5, name: 'Cooperation', value: parseInt(employee.competencies[5].level) },
      d6: { id: 6, name: 'Experience', value: parseInt(employee.competencies[6].level)  }
    };

    });
  })

  .controller('EmployeeRankController', function($scope, $stateParams, Employees) {
    $scope.employeeRank = Employees.get({employeeId: $stateParams.employeeId, data: 'rank'});
  })
  .controller('RanksController',['$scope', '$stateParams', 'Ranks' ,'$sce',  function($scope, $stateParams, Ranks, $sce) {

    $scope.rankId = $stateParams.rankId;
    $scope.title = "Autonomous";
    $scope.ranks = Ranks.query(function(ranks) {
      $scope.level0 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level0);
      $scope.level1 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level1);
      $scope.level2 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level2);
      $scope.level3 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level3);
      $scope.level4 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level4);
      $scope.level5 = $sce.trustAsHtml(ranks[$stateParams.rankId].level.level5);
      //$scope.title = ranks[$stateParams.rankId].title;
    });

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
