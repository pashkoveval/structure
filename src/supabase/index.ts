import type { Database } from './types/database.d';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nkugwcnvcvtpxwwmgpln.supabase.co';
const supabaseKey = import.meta.env.VITE_DBP;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
