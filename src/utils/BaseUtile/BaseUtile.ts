import type { Json } from '@/supabase/types/database';

export interface BaseUtile {
  action: (...attrs: unknown[]) => void | Json | Error | Promise<void | JSON | Error>;
}

const baseUtile: BaseUtile = {
  action: () => {
    console.log('Run baseUtile');
  },
};

export default baseUtile;
