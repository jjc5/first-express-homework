const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greeting/', (req, res) => {
  res.send('Hello Stranger');
});

app.get('/greeting/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});
/***************************************/

app.get('/tip/:total/:tipPercentage', (req, res) => {
  const total = parseInt(req.params.total);
  const tipPercentage = parseInt(req.params.tipPercentage);
  const final = total * tipPercentage / 100;
  res.send(`${final}`);
});















app.listen(PORT, () => {
  console.log('i love you', PORT);
});
