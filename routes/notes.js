const notes = require('express').Router();
const {readFromFile} = require('../helpers/fsHelper');

notes.get('/api', (req, res) => {
    console.log(res);
  });

// notes.post('/', (req, res) => {
//     readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
//     console.log(data);
//   }); 

module.exports = notes;