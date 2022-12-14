import { ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { clientsApi } from '@/api/clientsApi';
import type { Client } from '@/clients/types/client';

const getClient = async (id: number): Promise<Client> => {
  const { data } = await clientsApi.get<Client>(`/clients/${id}`);
  return data;
};

const useClient = (id: number) => {
  const client = ref<Client>();

  const { isLoading, data, isError } = useQuery(
    ['client', id],
    () => getClient(id),
    {
      retry: false,
    }
  );

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  return { isLoading, client, isError };
};

export default useClient;
