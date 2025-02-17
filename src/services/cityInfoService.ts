import { openai } from '../lib/openaiClient';

export async function fetchCityInformation(cityName: string): Promise<string> {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Provide detailed information about the city of ${cityName}.`,
      max_tokens: 150,
    });

    return response.data.choices[0].text || '';
  } catch (error) {
    console.error('Error fetching city information:', error);
    throw error;
  }
} 