const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/db.sqlite'
});

const models = [
  require('./notes.model')
]

for (const model of models) {
  model(sequelize);
}


module.exports = sequelize;
