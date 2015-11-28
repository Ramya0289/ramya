var angularFormsApp = angular.module('angularFormsApp',['ngRoute']);

angularFormsApp.config(function($routeProvider){
  
  $routeProvider
  .when("/home",{
    templateUrl:"home.html",
    controller:"HomeController"
  })
   .when("/employee",{
    templateUrl:"efTemplate.html",
    controller:"efController"
  })
    .when("/updateEmployee/: id",{
    templateUrl:"efTemplate.html",
    controller:"efController"
  })
  .otherwise({
    redirectTo:"/home"
  });
});


angularFormsApp.controller('HomeController', function($scope,$location,dataService){
  
  $scope.showCreateEmployeeForm = function(){
    $location.path("/employee");
  };

  $scope.showUpdateEmployeeForm = function(id){
    $location.path("/updateEmployee/" + id);
  };
});