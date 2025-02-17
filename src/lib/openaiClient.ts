import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || 'your-openai-api-key',
});

export const openai = new OpenAIApi(configuration); 