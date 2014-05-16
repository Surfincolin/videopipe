/* /controllers/streamEditController.js
*/
App.StreamEditController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			var stream = this.get('model');
			// this will tell Ember-Data to save/persist the new record

			stream.save();
			// then trasition to the current stream
			this.transitionToRoute('stream', stream);
		}
	}
});