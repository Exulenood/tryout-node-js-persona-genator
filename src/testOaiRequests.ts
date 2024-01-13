import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();
const openAiApiKey = process.env.OPEN_AI_API_KEY;

const testRequest = new OpenAI({
  apiKey: openAiApiKey,
});

export async function oaiTest(prompt: string) {
  try {
    const testResponse = await testRequest.chat.completions.create({
      messages: [{ role: 'system', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    return testResponse.choices[0];
  } catch (error) {
    return error;
  }
}

