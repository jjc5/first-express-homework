const express = require('express');
const app = express();
const PORT = 3000;

const beers = [];

for (let i=1; i<=99; i++) {
  beers.push(i);
}


app.get('/', (req, res) => {
  res.send(`${beers.length} Bottles of beer on the wall&nbsp&nbsp<a href="/${parseInt(beers[97])}">Take one down, pass it around</a>`);
});


app.get('/:numberOfBottles', (req, res) => {
  if (req.params.numberOfBottles > 0){
    res.send(`${beers[req.params.numberOfBottles] - 1} Bottles of beer on the wall&nbsp&nbsp<a href="/${parseInt(beers[req.params.numberOfBottles] - 2)}">Take one down, pass it around</a>`);
  }else {
    res.send(`${beers[req.params.numberOfBottles] - 1} Bottles of beer on the wall&nbsp&nbsp<a href="/">Go home you're drunk</a>`);
  }
});






















app.listen(PORT, () => {
  console.log('i love you', PORT);
});
