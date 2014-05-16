/* /routes/streamsCreateRoute.js
*/
App.StreamsCreateRoute = Ember.Route.extend({
	model: function() {
		// the model for this route is a new empty Ember.Object
		//return Ember.Object.create({});
		return this.store.createRecord('stream');
	},

	// in this case (the create route), we can reuse the user/edit template
	// associated with the streamsCreateController
	renderTemplate: function() {
		this.render('stream.edit', {
			controller: 'streamsCreate'
		});
	}
});