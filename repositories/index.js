const sequelize = require('./db');


const getNoteById = async (id) => {
  return await sequelize.models.Note.findByPk(id);
}

const getAllNotes = async () => {
  return await sequelize.models.Note.findAll();
}

const addNote = async (note) => {
  // console.log(note);
  return await sequelize.models.Note.create(note);
}

const editNote = async (id, note) => {
  return await sequelize.models.Note.update(note, { where: { id: id } });
}

const deleteNote = async (id) => {
  return await sequelize.models.Note.destroy({ where: { id: id } });
}

const countByCategories = async (id) => {
  return await sequelize.models.Note.findAll({ 
    attributes: [
      'category',
      [sequelize.fn('COUNT', sequelize.col('category')), 'n_notes']
    ], 
    group: 'category'
  })
}


module.exports = {
  sequelize,
  getNoteById, 
  getAllNotes,
  addNote,
  editNote,
  deleteNote,
  countByCategories
}
