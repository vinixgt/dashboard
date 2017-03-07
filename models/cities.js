module.exports = function (db) {
	var Sequelize = require('sequelize');

	var City = db.sequelize.define('City', {
		id: { type: Sequelize.INTEGER, primaryKey: true},
		name: { type: Sequelize.STRING, field: "name"},
		code: { type: Sequelize.STRING, field: "code"}
	});
	return City;
}
