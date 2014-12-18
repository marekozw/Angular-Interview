angular.module('app', [])
 
  .directive('parent', function () {
    return {
      restrict: 'E',
      controller: function () {
        console.log('Parent Controller');
      },
      compile: function () {
        console.log('Parent Compile');
        return {
          pre: function () {
            console.log('Parent Pre Link');
          },
          post: function () {
            console.log('Parent Post Link');
          }
        };
      }
    };
  })
  .directive('child', function () {
    return {
      restrict: 'E',
      controller: function () {
        console.log('..Child Controller');
      },
      compile: function () {
        console.log('..Child Compile');
        return {
          pre: function () {
            console.log('..Child Pre Link');
          },
          post: function () {
            console.log('..Child Post Link');
          }
        };
      }
    };
  });
