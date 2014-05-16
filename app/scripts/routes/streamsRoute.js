/* /routes/streamsRoute.js
*/
App.StreamsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('stream');
	}
});
