/* /routes/streamEditRoute.js
*/
App.StreamEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('stream');
	}
});