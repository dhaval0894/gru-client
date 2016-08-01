import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		beginTest() {
			$.ajax({
				async: true,
				crossDomain: true,
				url: "http://localhost:8000/authenticate",
				method: "GET",
				headers: {
				    Authorization: "test-2345",
				},
				success: function(response){
					console.log(response);
				}
			});
			
		}
	}

});
