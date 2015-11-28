'use strict';

eventsApp.controller('EventController',  function EventController ($scope){
	$scope.sortorder = "name"
	$scope.event = {
		name: 'Angularjs',
		date: '09/02/2015',
		time: '10.30 am',
		imageUrl:'angularjs-logo.png',
		sessions:[{
			name:'Darling Directives',
			creator:'Ramya',
			duration:1 ,
			level: '1',
			upVoteCount: 0
		},{
			name:'Cute Controller',
			creator:'Ramya',
			duration:2,
			level: '2',
			upVoteCount: 0
		},{
			name:' Fabulous Factories',
			creator:'Ramya',
			duration:4,
			level: '3',
			upVoteCount: 0
		}
		]
	}
	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	}
	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	}
})

/****** using data services

function EventController($scope,EventData,$log,$routeParams){
	
	EventData.getEvent()
	.success(function(event){$scope.event = event})
	.error(function(data, status, headers, config){$log.warn(data, status, headers(), config)})
}

if we use resource we can bind directly
$scope.event = EventData.getEvent($routeParams.eventId);
console.log($route.current.foo)

but if we want to do something else with it we can get the promise out of the object since it contains apromise but isnot justpromise
EventData.getEvent()
.$promise.then(function(event){$scope.event = event;})
.catch(function(response){console.log(response);})






***********\




























