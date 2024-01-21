import { oaiRequest } from './config';
import { Persona } from './interfaces';

export async function oaiTest(prompt: string) {
  try {
    const response = await oaiRequest.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0];
  } catch (error) {
    return error;
  }
}

export async function createRandomPersona() {
  try {
    const response = await oaiRequest.chat.completions.create({
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content:
            'You will randomly generate proper value for a persons properties firstName, surName, gender, age, country, placeOfResidence, profession and personality. Proper means that the poperties have to be consistant (eg. the Name should match the countries ususal naming practices). Output them in JSON',
        },
      ],
    });
    return response.choices[0];
  } catch (error) {
    return error;
  }
}
