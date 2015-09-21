angular.module('app', []);



angular.module('app').controller('mainCtrl', function($scope){
	$scope.message =[];
	$scope.handlePause = function(e){
		console.log(e);
		$scope.messages.push({text:'paused!'});
		console.log('paused!');
	}
	
});


ngular.module('app').directive('eventPause', function($parse){
	return{
		restrict:'A',
		link:function(scope,el,attrs){
			var fn = $parse(attrs['eventPause']);
			el.on('pause' function(event){
				scope.$apply(function(){
					fn(scope,{evt:event}) // or just write scope.handle pause bt not writing that direct binding to controller
				})
			})

		}


	}})

angular.module('app').directive('spacebarSupport', function(){
	return{
		restrict:'A',
		link:function(scope,el,attrs){
			$(body).on('keypress', function(evt){
				var vidEl = el[0];
				if(evt.keyCode === 32){
					if(vidEl.paused){
						vidEl.play();
					}
					else{
						vidEl.pause();

					}

				}


			})
		}
	}
	
});