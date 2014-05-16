/* /controllers/streamsController.js
*/
App.StreamsController = Ember.ArrayController.extend({
	//sortProperties: ['name'],
	//sortAscending: true // false = descending

	streamsCount: function() {
		return this.get('model.length');
	}.property('@each')
});