const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Note', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false},
    category: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    creationTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });
}