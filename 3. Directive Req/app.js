angular.module('app', [])
  .directive('todoList', function () {
    return {
      transclude: true,
      template: '<p>Count: {{todosCount}}</p><div ng-transclude></div>',
      
      link: function (scope) {
        scope.todosCount = 10;
      }
    };
  })
 
  .directive('todo', function () {
    return {
      template: '<button ng-click="onClick()">Click Me!</button>',
      link: function (scope) {
        scope.onClick = function () {
          // Fill in
        };
      }
    };
  });
