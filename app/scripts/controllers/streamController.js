/* /controllers/streamController.js
*/
App.StreamController = Ember.ObjectController.extend({
	actions: {
		edit: function() {
			this.transitionToRoute('stream.edit');
		},
		delete: function() {
			// this tells Ember-Data to delete the current user
			this.get('model').deleteRecord();
			this.get('model').save();
			// then transition to the streams route
			this.transitionToRoute('streams');
		}
	}
});