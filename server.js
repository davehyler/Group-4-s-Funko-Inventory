const express = require('express');
const path = require('path');
const funkoData = require('./db/funkoInventory.json');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/funkos', (req, res) => res.json(funkoData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
