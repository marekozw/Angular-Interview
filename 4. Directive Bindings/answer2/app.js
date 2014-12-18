angular.module('app', [])
  .controller('BoardCtrl', function () {
    this.score = {
      value: 0
    };
    
  })
  .directive('scoreBoard', function () {
    return {
      restrict: 'AE',
      template: '<div class="score-board">' + 
        '<button ng-click="add()">+</button>' + 
        '<button ng-click="subtract()">-</button>' + 
      '</div>',
      scope: {
        score: '=scoreBoardScore'
      },
      link: function (scope) {
        scope.add = function () {
          scope.score.value++;
        };
        scope.subtract = function () {
          scope.score.value--;
        };
      }
    };
  });
