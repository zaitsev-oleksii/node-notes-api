const { noteSchema } = require('./schemas.js');
const repository = require('../repositories');

const getNoteById = async (id) => {
  const note = await repository.getNoteById(id);
  if (!note)
    throw new Error(`Note with id=${id} doesn't exist.`);
  return note;
  // const note = notes.getById(id);
  // if (note)
  //   return note;
  // return `Note with id=${id} doesn't exist.`;
}

const getAllNotes = async () => {
  return await repository.getAllNotes();
  // return notes.getNotes();
}

const addNote = async (data) => {
  try {
    const note = noteSchema.validateSync(data, { strict: true });
    // notes.addNote(note);
    // note.creationTime = getCurrentDateTime();
    await repository.addNote(note);
    // return `Note successfully added.`;
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
    const note = noteSchema.validateSync(data, { strict: true });
    await repository.editNote(id, note);
    // notes.editNote(id, note);
  } catch (error) {
    return `Error occured when editing note. ${error.message}`;
  }

  return `Note successfully edited.`;
}

const deleteNote = async (id) => {
  const note = await repository.getNoteById(id);
  if (note)
    throw new Error(`Note with id=${id} doesn't exist.`);
    // notes.deleteNote(id);
  try {
    await repository.deleteNote(id);
  } catch (error) {
    throw new Error(`Error occured when editing note. ${error.message}`);
  }

  return `Note successfully deleted.`
}

const getSummary = async () => {
  // const res = {};
  // for (category of categories) {
  //   res[category] = notes.getNotes().filter(note => note.category === category).length;
  // }
  const summary = await repository.countByCategories();
  // console.log(summary)
  return summary;
}

module.exports = { getAllNotes, getNoteById, addNote, editNote, deleteNote, getSummary }