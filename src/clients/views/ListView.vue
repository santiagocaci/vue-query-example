<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumber from '@/clients/components/PaginationNumber.vue';
import useClients from '@/clients/composables/useClients';

import LoadingModa from '@/shared/components/LoadingModa.vue';

const { isLoading, clients, currentPage, totalPages, setPage } = useClients();
</script>

<template>
  <div>
    <h2>List View</h2>

    <ClientList :clients="clients" />

    <PaginationNumber
      :current-page="currentPage"
      :total-pages="totalPages"
      @change-page="event => setPage(event)"
    />

    <LoadingModa v-if="isLoading" />
  </div>
</template>

<style scoped></style>
