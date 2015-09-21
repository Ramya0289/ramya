ngular.module('app', []);



angular.module('app').controller('mainCtrl', function($scope){
$scope.message = "I am message"
	
})

angular.module('app').directive('displyBox', function(){
	return{
		restrict:'E',
		templateUrl:'displyBox.html',
		controller:( function($scope){
			$scope.hidden = false;
			$scope.close= function(){
				$scope.hidden =true;
			}
		}),
		transclude:true
	}

	
})