import express from 'express';
import { createRandomPersona, oaiTest } from './api-oai';

const app = express();
const SERVER_URL = 'http://localhost';
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${SERVER_URL}:${PORT}`);
});

app.get('/test-oai-response', async (req, res) => {
  try {
    const prompt = req.query.prompt || 'add Testprompt here';
    const response = await oaiTest(prompt.toString());
    res.json(response);
  } catch {
    res.status(500).send('Error - could not execute test-oai-response');
  }
});

app.get('/generate-random-persona', async (req, res) => {
  try {
    const response = await createRandomPersona();
    res.json(response);
  } catch {
    res.status(500).send('Error - could not execute generate-random-persona-response');
  }
});
