'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cities = sequelize.define('Cities', {
    city: DataTypes.STRING,
    state_code: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cities;
};