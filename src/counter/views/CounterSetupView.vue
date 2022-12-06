<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';
import { storeToRefs } from 'pinia';

const counterSetup = useCounterSetupStore();
const { count, squareCount } = storeToRefs(counterSetup);
</script>

<template>
  <h1>Counter Setup!</h1>
  <h1>Counter: {{ count }}</h1>
  <h1>Square: {{ squareCount }}</h1>

  <br />

  <button @click="counterSetup.incrementByOne()">+1</button>
  <button @click="counterSetup.incrementBy(2)">+2</button>
  <button @click="counterSetup.incrementBy(5)">+5</button>
  <button @click="counterSetup.reset()">Reset</button>
</template>

<style scoped>
button {
  margin-right: 0.3rem;
  padding: 0.5rem 1rem;
}
</style>
