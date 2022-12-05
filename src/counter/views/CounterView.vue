<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';

const counterOptions = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(counterOptions);
</script>

<template>
  <h1>Counter: {{ count }}</h1>
  <h1>Square: {{ squareCount }}</h1>

  <br />

  <button @click="counterOptions.incrementByOne()">+1</button>
  <button @click="counterOptions.incrementBy(2)">+2</button>
  <button @click="counterOptions.incrementBy(5)">+5</button>
  <button @click="counterOptions.$reset()">Reset</button>
</template>

<style scoped>
button {
  margin-right: 0.3rem;
  padding: 0.5rem 1rem;
}
</style>
