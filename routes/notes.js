const express = require('express');
const service = require('../services/notes');


const router = express.Router();

router.get('/', async (req, res) => {
  await service.getAllNotes()
    .then(notes => res.status(200).json(notes))
    .catch(error => res.status(400).send(error.message));
});

router.get('/:id', async (req, res) => {
  const id = +req.params.id;
  await service.getNoteById(id)
    .then(note => res.status(200).json(note))
    .catch(error => res.status(400).send(error.message))
});

router.patch('/:id', async (req, res) => {
  const id = +req.params.id;
  const data = req.body;
  await service.editNote(id, data)
    .then(message => res.status(200).send(message))
    .catch(error => res.status(400).send(error.message));
});

router.delete('/:id', async (req, res) => {
  const id = +req.params.id;
  await service.deleteNote(id)
    .then(message => res.status(200).send(message))
    .catch(error => res.status(400).send(error.message));
});

router.post('/', async (req, res) => {
  const data = req.body;
  await service.addNote(data)
    .then(message => res.status(200).send(message))
    .catch(error => res.status(400).send(error.message))
});


module.exports = router;
