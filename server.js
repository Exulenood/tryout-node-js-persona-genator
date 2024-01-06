const express = require('express');

const app = express();
const SERVER_URL = 'http://localhost';
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${SERVER_URL}:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Persona Generator Server is running');
});
