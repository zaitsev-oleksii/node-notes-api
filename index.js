const express = require('express');
const { sequelize } = require('./repositories');

const { initialNotes } = require('./config');


const app = express();

const PORT = 8000;

const assertDBConnection = async () => {
  console.log('Checking DB connection...');
  try {
    await sequelize.authenticate();
    console.log('DB connection established.');
  } catch (error) {
    console.log('Error connecting to DB.');
    console.log(error.message);
    process.exit(1);
  }
}

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

const run = async () => {
  await assertDBConnection();

  // Filling db with Initial Notes
  await sequelize.sync({ force: true });
  for (const note of initialNotes) {
    sequelize.models.Note.create(note);
  }

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

run();
