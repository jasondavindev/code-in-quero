'use strict';

module.exports = function(app) {
	const db = app.datasources['Mysql'];

	return {
		migrateAll() {
			db.automigrate();
		},

		query(stmt, callback) {
			db.connector.query(stmt, callback);
		},
	};
};
