import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const SERVER_URL = 'http://localhost';
const PORT = 3000;
const openAIapiKey = process.env.OPEN_AI_API_KEY;

app.listen(PORT, () => {
  console.log(`Server is running on ${SERVER_URL}:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Persona Generator Server is running');
});
