const { object, string, number, date } = require('yup');

const noteSchema = object({
  name: string().required(),
  content: string().required(),
  category: string().required()
});

module.exports = { noteSchema };