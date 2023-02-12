const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let plants = [
  {
    name: 'Peace Lily',
    species: 'Spathiphyllum',
    waterSchedule: 'Every 3 days'
  }
];

app.get('/plants', (req, res) => {
  res.send(plants);
});

app.post('/plants', (req, res) => {
  const plant = req.body;
  plants.push(plant);
  res.send(plant);
});

app.listen(port, () => {
  console.log(`Plant Tracker app listening at http://localhost:${port}`);
});

fetch('http://localhost:3000/plants')
  .then(response => response.json())
  .then(plants => console.log(plants));

fetch('http://localhost:3000/plants', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Jade Plant',
    species: 'Crassula Ovata',
    waterSchedule: 'Once a week'
  })
})
  .then(response => response.json())
  .then(plant => console.log(plant));