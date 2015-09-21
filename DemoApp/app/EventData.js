eventsApp.factory('EventData',function($http){
	return {
		getEvent:function(){
			return $http({method:'GET',url:''})
			
		}
	};
});


/*****using resource means that our webservices are restful API and it must be added to app/module  as  dependancy

eventsApp.factory('EventData',function($resource){
	return {
		getEvent:function(){
			return $resource('url here:id',{id:'@id'}).get({id:1});
			
		}
	};
	samething we want to add save
	eventsApp.factory('EventData',function($resource){
		var resource = $resource('url here:id',{id:'@id'})
	return {
		getEvent:function(eventId){
			return resource.get({id:eventId});
			
		}
	    save: function(event){
	    	event.id = 999;
	     return resource.save(event);
	    }	
	};

	other with resource are query which brings an array,remove and delete to delete;you can also create your own
	its an object that requires method,isArray and params

	anchor scrol service takes you to an element whose id matches..so mention an id in html and eventhandler pointing
	to function that sets id

	using cache factory
});*********\