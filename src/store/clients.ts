import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/types/client';

export const useClientsStore = defineStore('clients', () => {
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);

  const setClients = (newClients: Client[]) => (clients.value = newClients);
  const setPage = (page: number) => {
    if (currentPage.value === page) return;
    if (page <= 0) return;
    if (page > totalPages.value) return;
    currentPage.value = page;
  };

  return { currentPage, totalPages, clients, setClients, setPage };
});
