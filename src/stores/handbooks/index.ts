import type { Handbook, HandbooksList, TableRow, Tables } from '@/supabase/types';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '@/supabase/api';
import { getFulfilledResult } from '@/helpers/Promise/getFulfilledResult';

export const useHandbooksStore = defineStore('HANDBOOKS', () => {
  const handbooksListBase = ref<Handbook[]>([]);
  const handbooksList = ref<HandbooksList>({});

  const getHandbooks = async () => {
    const { data, error } = await API.GET.base<Handbook[]>('handbooks');
    if (!error) {
      handbooksListBase.value = data;
    }
    return { data, error };
  };

  const getHandbooksList = async (list: Tables[]) => {
    const promises = list.map(async (code) => {
      const response = await API.GET.base<TableRow<Tables>>(code);
      return { code, response };
    });
    const requests = await Promise.allSettled(promises);
    return requests;
  };

  const getBaseHandbooks = async (listBase?: Tables[]) => {
    const { data } = await getHandbooks();

    if (data || listBase) {
      const listForLoad = listBase ?? data.map((element) => element.name as Tables);

      const requests = await getHandbooksList(listForLoad);
      const successful = getFulfilledResult(requests);

      successful.forEach((element) => {
        handbooksList.value[element.code] = element.response.data;
      });
    }
  };

  return {
    handbooksListBase,
    handbooksList,
    getHandbooks,
    getHandbooksList,
    getBaseHandbooks,
  };
});
