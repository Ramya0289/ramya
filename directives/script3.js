angular.module('app', []);



angular.module('app').controller('mainCtrl', function($scope){

	$scope.user1={
		name:"luke",
		selected:"false"
	}
})

angular.module('app').directive('userTile', function(){

	return{
		restrict:'E',
		scope:{
			user:'='
		},
		templateUrl:'userTile.html',
		
	}
})

angular.module('app').directive('userClickSelect', function(){
	return{
		link:function(scope,el,attrs){
			el.on('click',function(){
				scope.user.selected = !scope.user.selected;
				scope.apply();

			})
		}
	}
})

// Another example implementation 

angular.module('app', []);



angular.module('app').controller('mainCtrl', function($scope){
$scope.size = 150;
	
})

angular.module('app').directive('fontScale', function(){

	return{
		link:function(scope,el,attrs){
			$scope.watch(attrs['fontScale'],function(newVal){
				el.css("font-size" , newVal + %);

			});
		}
	}
})
































