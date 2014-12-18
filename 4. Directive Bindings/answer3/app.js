angular.module('app', [])
  .controller('BoardCtrl', function () {
    this.score = 0;
    
  })
  .directive('scoreBoard', function () {
    return {
      restrict: 'AE',
      template: '<div class="score-board">' + 
        '<button ng-click="add()">+</button>' + 
        '<button ng-click="subtract()">-</button>' + 
      '</div>',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        scope.add = function () {
          var newValue = ngModel.$modelValue + 1;
          ngModel.$setViewValue(newValue);
        };
        scope.subtract = function () {
          var newValue = ngModel.$modelValue - 1;
          ngModel.$setViewValue(newValue);
        };
      }
    };
  });
