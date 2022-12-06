import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterSetupStore = defineStore('counterSetup', () => {
  // State properties
  const count = ref<number>(0);
  const lastChange = ref<Date>();

  // Getters
  const squareCount = computed(() => count.value * count.value);

  // Actions
  const reset = () => {
    count.value = 0;
    lastChange.value = undefined;
  };
  const incrementBy = (value: number) => (count.value += value);
  const incrementByOne = () => incrementBy(1);
  return {
    // State properties
    count,
    lastChange,

    // Getters
    squareCount,

    // Actions
    reset,
    incrementBy,
    incrementByOne,
  };
});
