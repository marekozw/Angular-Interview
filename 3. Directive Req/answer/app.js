angular.module('app', [])
  .directive('todoList', function () {
    return {
      transclude: true,
      template: '<p>Count: {{todosCount}}</p><div ng-transclude></div>',
      
      controller: function ($scope) {
        this.clear = function () {    
          $scope.todosCount = 0;
        };
      },
      
      link: function (scope) {
        scope.todosCount = 10;
      }
    };
  })
 
  .directive('todo', function () {
    return {
      template: '<button ng-click="onClick()" type="button">Click Me!</button>',
      require: '^todoList',
      link: function (scope, element, attrs, todoList) {
        scope.onClick = function () {
          todoList.clear();
        };
      }
    };
  });
