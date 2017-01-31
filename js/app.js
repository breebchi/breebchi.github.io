(function() {
//angular.module('myApp', ['ngRoute','ngAnimate', 'vAccordion','ngAria', 'ui.bootstrap', 'ngMaterial', 'ngMessages',  'ui.router'])
  var app =  angular.module('myApp', ['ngRoute','ngAnimate','ngAria', 'ui.bootstrap', 'ngMaterial', 'ngMessages',  'ui.router']);
//var app = angular.module('myApp', ['ngAnimate', 'vAccordion','ngAria', 'ui.bootstrap', 'ngMaterial', 'ngMessages', 'ngRoute', 'ui.router']);


app.controller('MainController',['$scope', 'searchFor',
function($scope,searchFor) {


  // $scope.panesB = [{
  //   id: 'pane-1b',
  //   header: 'Pane 1',
  //   content: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.',
  //   isExpanded: true
  // }, {
  //   id: 'pane-2b',
  //   header: 'Pane 2',
  //   content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  // }, {
  //   id: 'pane-3b',
  //   header: 'Pane 3',
  //   content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.',

  // }];

  // $scope.toggleAllPanelsStatus = function(collapsed) {
  //   if ($scope.collapsed) {
  //     $scope.accordionB.expandAll();
  //     $scope.collapsed = false;
  //   }
  //   else {
  //     $scope.accordionB.collapseAll();
  //     $scope.collapsed = true;
  //   }

  // }

  // $scope.expandCallback = function(index, id) {
  //   console.log('expand:', index, id);
  // };

  // $scope.collapseCallback = function(index, id) {
  //   console.log('collapse:', index, id);
  // };

  // $scope.$on('accordionA:onReady', function() {
  //   console.log('accordionA is ready!');
  // });
  
    $scope.oneAtATime = false;
    $scope.isOpen = false;
    
    // Data 
     $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Content - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Content - 2"
    }
  ];

  $scope.updateOpenStatus = function(){
    $scope.isOpen = $scope.groups.some(function(item){
      return item.isOpen;
    });
  }

}]);
    app.filter('searchFor', function() {

  // All filters must return a function. The first parameter
  // is the data that is to be filtered, and the second is an
  // argument that may be passed with a colon (searchFor:searchString)

  return function(arr, searchString) {

    if (!searchString) {
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    // Using the forEach helper method to loop through the array
    angular.forEach(arr, function(item) {

      if (title.header.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item);
      }

    });

    return result;
  };

});
       app.run(['$rootScope',function($rootScope){  console.log("Testing");  }]);



})();
