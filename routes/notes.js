const express = require('express');
const { getAllNotes, getNoteById, addNote, editNote, deleteNote, getSummary } = require('../services/notes.js');

const router = express.Router();

router.get('/', async (req, res) => {
  await getAllNotes()
    .then(notes => res.status(200).json(notes))
    .catch(error => res.status(400).send(error.message));
  // res.json(notes);
});

router.get('/:id', async (req, res) => {
  const id = +req.params.id;
  await getNoteById(id)
    .then(note => res.status(200).json(note))
    .catch(error => res.status(400).send(error.message))
  // const note = await getNoteById(id);
  // res.json(note);
});

router.patch('/:id', async (req, res) => {
  const id = +req.params.id;
  const data = req.body;
  await editNote(id, data)
    .then(message => res.status(200).send(message))
    .catch(error => res.status(400).send(error.message));
  // const result = await editNote(id, data);
  // res.json(result);
});

router.delete('/:id', async (req, res) => {
  const id = +req.params.id;
  await deleteNote(id)
    .then(message => res.status(200).send(message))
    .catch(error => res.status(400).send(error.message));
  // const result = await deleteNote(id);
  // res.json(result);
});

router.post('/', async (req, res) => {
  const data = req.body;
  await addNote(data)
    .then(message => res.status(200).send(message))
    .catch(error => res.status(400).send(error.message))
  // const result = await addNote(data);
  // res.json(result);
});


module.exports = router;