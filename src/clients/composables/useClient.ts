import { ref, watch, computed } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';

import { clientsApi } from '@/api/clientsApi';
import type { Client } from '@/clients/types/client';

const getClient = async (id: number): Promise<Client> => {
  const { data } = await clientsApi.get<Client>(`/clients/${id}`);
  return data;
};

const updateClient = async (client: Client) => {
  await new Promise(resolve => setTimeout(() => resolve(true), 2000));

  const { data } = await clientsApi.patch<Client>(
    `/clients/${client.id}`,
    client
  );
  return data;
};

const useClient = (id: number) => {
  const client = ref<Client>();
  // const queryClient = useQueryClient();
  const { isLoading, data, isError } = useQuery(
    ['client', id],
    () => getClient(id),
    {
      retry: false,
    }
  );
  const clientMutation = useMutation(updateClient);

  // const updateClient = async (client: Client): Promise<Client> => {
  //   // await new Promise(resolve => setTimeout(() => resolve(true), 2000));
  //   const { data } = await clientsApi.patch<Client>(
  //     `/clients/${client.id}`,
  //     client
  //   );
  //   const queries = queryClient
  //     .getQueryCache()
  //     .findAll(['clients?page='], { exact: false });
  //   // query.forEach(query => query.reset());
  //   queries.forEach(query => query.fetch());
  //   return data;
  // };

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  return {
    // Properties
    isLoading,
    client,
    isError,
    clientMutation,

    // Getters
    isUpdatingClient: computed(() => clientMutation.isSuccess),
    isLoadingClient: computed(() => clientMutation.isLoading),
    isSuccesClient: computed(() => clientMutation.isSuccess),

    // Methods
    updateClient: clientMutation.mutate,
  };
};

export default useClient;
