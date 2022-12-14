<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import useClient from '@/clients/composables/useClient';
import LoadingModal from '@/shared/components/LoadingModa.vue';

const route = useRoute();
const router = useRouter();

const {
  client,
  isLoading,
  isError,
  clientMutation,
  isUpdatingClient,
  isLoadingClient,
  isSuccesClient,
  updateClient,
} = useClient(Number(route.params.id as string));

watch(isUpdatingClient, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000);
});

watch(isError, () => {
  if (isError.value) router.replace('/clients');
});
</script>

<template>
  <div>
    <h3 v-if="isLoadingClient.value">Saving...</h3>
    <h3 v-if="isSuccesClient.value">Saved!</h3>

    <LoadingModal v-if="isLoading" />
    <div v-if="client">
      <h1>{{ client.name }}</h1>
      <form @submit.prevent="updateClient(client!)">
        <input type="text" placeholder="Name" v-model="client.name" />
        <input type="text" placeholder="Address" v-model="client.address" />
        <button :disabled="isLoadingClient.value">Save</button>
      </form>
    </div>

    <code>{{ client }}</code>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0.3rem;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  color: hsla(160, 100%, 37%, 1);
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 0.3rem;
  outline: none;
  background-color: transparent;
}

button {
  font-size: 1rem;
  width: 5rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 0.4rem;
}

button:disabled {
  background-color: hsla(160, 100%, 37%, 1);
  cursor: not-allowed;
}

code {
  display: inline-block;
  margin-top: 0.8rem;
}
</style>
