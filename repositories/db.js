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

// console.log(sequelize.authenticate);

module.exports = sequelize;
// const Note = sequelize.define('Note', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, allowNull: false},
//   category: { type: DataTypes.STRING, allowNull: false },
//   content: { type: DataTypes.STRING, allowNull: false },
//   creationTime: { type: DataTypes.STRING, allowNull: false }
// });

// const run = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
//   // await sequelize.sync({ force: true });
//   // for(const note of initialNotes){
//   //   Note.create(note);
//   // }
//   const notes = await sequelize.models.Note.findAll({
//     attributes: ['id', 'name']
//   });
//   console.log(JSON.stringify(notes));
// }

// run();