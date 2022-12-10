const notes = require('express').Router();
const {readFromFile, readAndAppend} = require('../helpers/fsHelper');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  })

notes.get('/:noteTitle', (req, res) => {
    const noteTitle = req.params.title;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => tip.title === noteTitle);
        console.log(result);
        return result.length > 0
          ? res.json(result)
          : res.json('NA');
      });
  });
  

notes.post('/', (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;
