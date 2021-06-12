// const express = require('express');
// const app = express();
// const PORT = 3000;
//
// app.get('/greeting/', (req, res) => {
//   res.send('Hello Stranger');
// });
//
// app.get('/greeting/:name', (req, res) => {
//   res.send(`Hello ${req.params.name}`);
// });
// /***************************************/
//
// app.get('/tip/:total/:tipPercentage', (req, res) => {
//   const total = parseInt(req.params.total);
//   const tipPercentage = parseInt(req.params.tipPercentage);
//   const final = total * tipPercentage / 100;
//   res.send(`${final}`);
// });
// /***************************************/
//
// app.get('/magic/:phrase', (req, res) => {
//   const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
//   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
//   res.send(`<h1>${req.params.phrase}?    ${randomResponse}</h1>`);
// });
// /***************************************/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// app.listen(PORT, () => {
//   console.log('i love you', PORT);
// });
