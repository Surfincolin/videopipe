/* /controllers/streamsCreateController.js
*/
App.StreamsCreateController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			// just before saving, we set the creationDate
			//this.get('model').set('creationDate', new Date());
			var self = this;
			// create a record and save it to the store
			var newStream = this.get('model');
			newStream.save().then(function(){
			  self.transitionToRoute('stream', newStream);
			});


			// redirects to the stream itself
			//this.transitionToRoute('stream', newStream);
		}
	}
});