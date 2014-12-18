angular.module('app', [])
  .controller('ParentCtrl', function ($scope) {
    $scope.variable = 1
  })
  .controller('ChildCtrl', function ($scope) {
    $scope.variable = 2;
  });
