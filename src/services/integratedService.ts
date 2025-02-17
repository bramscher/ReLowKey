import { fetchCityInformation } from './cityInfoService';
import { saveCityInformation } from './supabaseService';

export async function processCity(cityName: string): Promise<void> {
  try {
    const info = await fetchCityInformation(cityName);
    await saveCityInformation(cityName, info);
  } catch (error) {
    console.error('Error processing city:', error);
  }
} 