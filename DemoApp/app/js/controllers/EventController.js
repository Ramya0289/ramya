'use strict';

eventsApp.controller('EventController',  function EventController ($scope){
	$scope.sortorder = "name"
	$scope.event = {
		name: 'Angularjs',
		date: '09/02/2015',
		time: '10.30 am',
		imageUrl:'/img/angularjs-logo.png',
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