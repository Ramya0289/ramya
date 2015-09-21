'use strict';


eventsApp.controller('EditEventController',  function EditEventController($scope, EventData){
	$scope.saveEvent = function(event, newEventForm){
		if (newEventForm.$valid){
			EventData.save(event)
			.$promise
			.then(function(response){})
			.catch(function(response){})
		}
	}
}
);