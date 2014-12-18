angular.module('app', [])
  .controller('ParentCtrl', function ($scope) {
    $scope.data = {
        variable: 1
    };
  })
  .controller('ChildCtrl', function ($scope) {
    $scope.data.variable = 2;
  });
