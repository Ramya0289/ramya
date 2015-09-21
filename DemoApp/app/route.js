

 angular routing 

 create a page index with only the nav and theme to be used in the app along with the all the libraries 
 in that page add ng-view .this is where all the templates will render /templates have only html and core-directives

 now  in the main app page we will provide routing chaining to the module and add ngRoute dependancy .config is called when 
 bootstrap the application (unrelated if we give $ while naming of services we are overiding its angular properties;$ should be 
 given when they are used as dependancies)

 in the index html page all href should point to the values in routeprovider.when and not to  provie hash in html before "/"

 angular has a templatecache/we can use params or PathParams to access properties on eventId using route service

 .config(function($routeProvider) {
 	$routeProvider.when('/newEvent',{  (we can pass parameter here like '/newEvent:eventId')
         foo:'fighters'  (this can be done with $route service adding additional properties to url)
 		templateUrl:"/NewEvent.html",
 		controller:"EditEventController"
 		resolve{
 			event:function(route EventData){
 				return EventData.getData($route.current.PathParams.eventId).$promise
 			}
 		}
 	})

 	$routeProvider.otherwise({redirectTo:'/events'})
 	
 })
 $locationProvider.html5Mode(true); (to remove hash when page loads use this and remove # in html the go to node server 
 make changes that any url just go index if any url is from external and then put <base> in html head)

 route service can also be used to reload
 use $route.reload();

 resolve from route is used to wait loading any part of the page till the resolve function is loaded.
 now the callback function is near resolve and not in the controller 

 using location service :it used as an alternate to routeprovider and is usually used with eventhandler
 it is used in controller and location:holds url value
 location also gives important url properties

