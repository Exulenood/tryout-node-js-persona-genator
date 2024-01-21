import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();
const openAiApiKey = process.env.OPEN_AI_API_KEY;

export const oaiRequest = new OpenAI({
  apiKey: openAiApiKey,
});
