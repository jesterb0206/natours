const fs = require('fs');
const express = require('express');

const app = express();

/* app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You are able to post to this endpoint...');
}); */

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on ${port}...`);
});
