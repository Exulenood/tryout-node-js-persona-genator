import { testOaiRequest } from './config';

export async function oaiTest(prompt: string) {
  try {
    const response = await testOaiRequest.chat.completions.create({
      messages: [{ role: 'system', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    return response.choices[0];
  } catch (error) {
    return error;
  }
}
