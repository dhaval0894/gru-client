import Ember from 'ember';

export default Ember.Route.extend({
	token: 'test-8945',
	actions: {
		beginTest() {
			let token = this.get('token');
			
			$.ajax({
				async: true,
				crossDomain: true,
				url: "http://localhost:8000/authenticate",
				method: "GET",
				headers: {
				    Authorization: token,
				}
			}).then((response) => {
				console.log(response);
			});
			
		}
	}
});
