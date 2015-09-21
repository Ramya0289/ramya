


eventsApp.filter('durations', function(){
	return function(duration) {
		switch(duration){
		case 1 :
		return 'Half Hour';
		case 2 :
		return ' Hour';
		case 4 :
		return 'Two Hour';
	    }

	}
})