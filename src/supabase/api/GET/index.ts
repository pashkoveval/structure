import type { Tables } from '@/supabase/types';
import supabase from '@/supabase';

export const GET = async <T>(table: Tables) => {
  const { data, error } = await supabase.from(table).select();
  return { data: data as T, error };
};

export default { GET };
