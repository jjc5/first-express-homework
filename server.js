const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greeting/', (req, res) => {
  res.send('Hello Stranger');
});

app.get('/greeting/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});















app.listen(PORT, () => {
  console.log('i love you', PORT);
});
