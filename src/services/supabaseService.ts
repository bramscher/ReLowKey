import { supabase } from '../lib/supabaseClient';

export async function saveCityInformation(cityName: string, info: string): Promise<void> {
  const { data, error } = await supabase
    .from('cities')
    .insert([{ name: cityName, information: info }]);

  if (error) {
    console.error('Error saving city information:', error);
    throw error;
  }

  console.log('City information saved:', data);
} 