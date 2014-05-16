/* /store.js
*/
App.ApplicationAdapter = DS.RESTAdapter;  // DS.FixtureAdapter;

DS.RESTAdapter.reopen({
	host: 'http://localhost:3000'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id'
});

