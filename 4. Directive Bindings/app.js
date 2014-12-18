angular.module('app', [])
  .controller('BoardCtrl', function () {
    this.score = 0;
    
  })
  .directive('scoreBoard', function () {
    return {
      restrict: 'AE',
      template: '<div class="score-board">' + 
        '<button>+</button>' + 
        '<button>-</button>' + 
      '</div>',
      link: function () {}
    };
  });
