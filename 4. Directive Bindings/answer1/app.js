angular.module('app', [])
  .controller('BoardCtrl', function () {
    this.score = 0;
    
    this.add = function () {
      this.score++;
    };
    this.subtract = function () {
      this.score--;
    };
  })
  .directive('scoreBoard', function () {
    return {
      restrict: 'AE',
      template: '<div class="score-board">' + 
        '<button ng-click="onAdd()">+</button>' + 
        '<button ng-click="onSubtract()">-</button>' + 
      '</div>',
      scope: {
        onAdd: '&scoreBoardOnAdd',
        onSubtract: '&scoreBoardOnSubtract'
      },
      link: function () {}
    };
  });
