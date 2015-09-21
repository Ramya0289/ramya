angular.module('app', []);



angular.module('app').controller('mainCtrl', function($scope){
	$scope.user1{
		name: 'Luke',
		address:{
			street:'Allen st',
			city:'falls church',
			planet:'venus'
		},
		friends [
		'han',
		'lea'],
		level:0
	}

$scope.user2{
		name: 'Luke',
		address:{
			street:'Allen st',
			city:'falls church',
			planet:'venus'
		},
		friends [
		'han',
		'lea'],
		level:1
	}
	
});


angular.module('app').directive('stateDisplay', function(){
return {
	link:function(scope,el,attrs){
		scope.$watch(attrs['stateDisplay'], function(newVal){
		switch(newVal){
			case 0 :
			el.css('background-color' , 'white');
			break;
			case 1 :
			el.css('background-color' , 'yellow');
			break;
			case 2 :
			el.css('background-color' , 'red');
			break;

		}
		});

	}
}})



angular.module('app').directive('userInfoCard', function(){
return {
	templateUrl:'userInfoCard.html',
	restrict:'E',
	scope: false,// if its true inherited scope if an object is created on it then its isolated scope 
	scope:{ user:"=",
	initialCollapsed:"@collapsed"},//data parameters, single value parameter(only string)
	//value parameter comes as a string not boolean to make it boolean assign to collapsed
	// now it is isolated scope but this tells parent to share,we go to html and set user value
	controller( function($scope){
		$scope.collapsed = ($scope.initialCollapsed === 'true');
		$scope.nextState = function(){
			$scope.user.level++;
			$scope.user.level = $scope.user.level % 3;
		}
		$scope.knightMe = function(user){
		user.rank = 'knight';   //note rank gets its scope from knightMe and then its used outside knightme
	};
	$scope.collapse = function(){
		$scope.collapsed = !$scope.collapsed;
	}	
	})
	$scope.removeFriend = function(friend){
		var idx = $scope.user.friends.indexOf(friend);
		if(idx > -1){
			$scope.user.friends.splice(idx,1);
		}
	}
}
});

angular.module('app').directive('removeFriend', function(){
return {
	templateUrl:removeFriend.html,
	restrict:"E",
	scope:{
		notifyParent: "&method" //passing function parameter
	},
	controller: function(){
		$scope.removing = "false";
		$scope.startRemove = function(){
			$scope.removing = "true";
		}
		$scope.cancelRemove = function(){
			$scope.removing = "false";
		}
		$scope.confirmRemove = function(){
			$scope.notifyParent();
		}
		
	}
	}

});




angular.module('app').directive('address', function(){
return {
	templateUrl:'address.html',
	scope:true, // inherited scope from parent directive
	restrict:'E',
	controller: function($scope){
		$scope.collapsed = false;
		$scope.collapsedAddress = function(){
			$scope.collapsed = true;
		}
		$scope.expandAddress = function(){
			$scope.collapsed = false;
		}
		
	}
}
});
/**(all this if two directives are used on an element)dont use inherited and isolated scope together/dont use 2 isolated scope
/isolated scope helps us create a truly reusable directive /eitherisolated or inherited directives create a new scope object
 /we can  have two directives on the same element that ask for  inherited scope (better not use) so custom elements can be
  inherited but always use attributes as shared scope/if two inherited scopes directives they have same scope object
  /component directives(userinfocard) use inherited scope and decorative(ngshow,attributes) use   shared scope**\


  // parent and child directives dont have to follow this rule
  // /<useinfo-card   ng-click> this is an example of two directives on an element