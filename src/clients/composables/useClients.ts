import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';

import { clientsApi } from '@/api/clientsApi';
import { useClientsStore } from '@/store/clients';

import type { Client } from '@/clients/types/client';

const getClients = async (page: number): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  //* Properties
  const store = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(store);

  //* Others
  const { data, isLoading } = useQuery(['clients?page=', currentPage], () =>
    getClients(currentPage.value)
  );

  watch(data, clients => {
    if (clients) store.setClients(clients);
  });

  //* Methods
  const setPage = (page: number) => store.setPage(page);

  //* Getters

  return {
    // Properties
    isLoading,
    clients,
    currentPage,
    totalPages,
    // Methods
    setPage,
    // Getters
  };
};

export default useClients;
