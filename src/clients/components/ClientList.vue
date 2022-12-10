<script setup lang="ts">
import type { Client } from '@/clients/types/client';
import { toRef } from 'vue';
const props = defineProps<{ clients: Client[] }>();
const clients = toRef(props, 'clients');
</script>
<template>
  <div>
    <ul>
      <li v-for="{ name, id } of clients" :key="id">
        <RouterLink :to="{ name: 'client-id', params: { id: id } }">
          {{ name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
