import express from 'express';
import { inventors } from './data/inventors.js';
// const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

// app.get('/something', (req, res) => res.status(418).send('Teapot?'));

app
  .route('/')
  .get((req, res) => res.send('We retrieve a ressource'))
  .post((req, res) => res.send('We create a ressource'))
  .put((req, res) => res.send('We update a ressource'))
  .patch((req, res) => res.send('We update a ressource partially'))
  .put((req, res) => res.send('We update a ressource'))
  .delete((req, res) => res.send('We delete a ressource'));

// RESPONSE TYPES
app.get('/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };
  res.json(data);
});

app.get('/inventors', (req, res) => res.json(inventors));

app.get('/contentful', async (req, res) => {
  try {
    const contentfulData = await fetch(
      'https://cdn.contentful.com/spaces/22o80r3chpjd/entries?access_token=nRXiDfnL2oToKVO7_59GIVbJ1AB-1fJaNII3e7R3a6A'
    );
    const data = await contentfulData.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

app.get('/html', (req, res) => res.sendFile(__dirname + '/index.html')); // only with CommonJS

app.get('/redirect', (req, res) => res.redirect('/data'));
app.get('/download', (req, res) => res.download('package.json'));

// VIEW ENGINE
app.set('view engine', 'ejs');
app.get('/pug', (req, res) => res.render('index'));
app.get('/ejs', (req, res) => res.render('index'));

// PARAMS & QUERY STRINGS
// app.get('/users/:id', (req, res) => {
//   console.log(req.params.id);
//   console.log(req.query.sort);
//   console.log(req.query.filter);
// });

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId; // holt den Parameter
  const sort = req.query.sort; // holt den Query-String
  res.send(`User ID: ${userId}, sorted by: ${sort}`);
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
