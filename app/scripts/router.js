/* /router.js
*/
App.Router.map(function() {
	this.resource('streams', function() {
		this.resource('stream', { path: '/:stream_id' }, function() {
			this.route('edit');
		});
		this.route('create');
	});
	this.route('about');
});

