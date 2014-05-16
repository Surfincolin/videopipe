/* /routes/streamRoute.js
*/
App.StreamRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('stream', params.stream_id);
	}
});