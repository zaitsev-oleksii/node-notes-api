const express = require('express');
const { getSummary } = require('../services/notes.js');

const router = express.Router();

router.get('/', async (req, res) => {
  await getSummary()
    .then(summary => res.status(200).send(summary))
    .catch(error => res.status(400).send(error.message));
  // const summary = await getSummary();
  // res.json(summary);
});

module.exports = router;