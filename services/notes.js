const { noteSchema } = require('./schemas');
const repository = require('../repositories');


const getNoteById = async (id) => {
  const note = await repository.getNoteById(id);
  if (!note)
    throw new Error(`Note with id=${id} doesn't exist.`);
  
  return note;
}

const getAllNotes = async () => {
  return await repository.getAllNotes();
}

const addNote = async (data) => {
  try {
    const note = noteSchema.validateSync(data, { stripUnknown: true });
    await repository.addNote(note);
  } catch (error) {
    throw new Error(`Error occured when adding note. ${error.message}`);
  }

  return `Note successfully added.`;
}

const editNote = async (id, data) => {
  const noteExists = await repository.getNoteById(id);
  if (!noteExists) 
    throw new Error(`Note with id=${id} doesn't exist.`);
  try {
    const note = noteSchema.validateSync(data, { stripUnknown: true });
    await repository.editNote(id, note);
  } catch (error) {
    return `Error occured when editing note. ${error.message}`;
  }

  return `Note successfully edited.`;
}

const deleteNote = async (id) => {
  const note = await repository.getNoteById(id);
  if (!note)
    throw new Error(`Note with id=${id} doesn't exist.`);
  try {
    await repository.deleteNote(id);
  } catch (error) {
    throw new Error(`Error occured when editing note. ${error.message}`);
  }

  return `Note successfully deleted.`
}

const getSummary = async () => {
  return await repository.countByCategories();
}


module.exports = { getAllNotes, getNoteById, addNote, editNote, deleteNote, getSummary }
