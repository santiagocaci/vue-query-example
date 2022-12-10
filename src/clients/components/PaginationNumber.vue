<script setup lang="ts">
type Props = {
  currentPage: number;
  totalPages: number;
};
type Emits = {
  (e: 'changePage', id: number): void;
};

defineProps<Props>();
const emits = defineEmits<Emits>();

const changePage = (numberPage: number) => emits('changePage', numberPage);
</script>
<template>
  <div>
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
      Prev
    </button>
    <button
      v-for="number in totalPages"
      :key="number"
      :class="{ active: currentPage === number }"
      @click="changePage(number)"
    >
      {{ number }}
    </button>
    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
div {
  margin-top: 1rem;
}

button {
  background-color: transparent;
  cursor: pointer;
  border-radius: 0.4rem;
  border: 2px solid var(--color-border);
  margin-right: 0.7rem;
  padding: 0.4rem 0.8rem;
  color: var(--color-text);
  transition: 0.4s;
}

button:disabled {
  cursor: not-allowed;
}

.active {
  color: hsla(160, 100%, 37%, 1);
  background-color: hsla(160, 100%, 37%, 0.2);
}

@media (hover: hover) {
  button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    color: hsla(160, 100%, 37%, 1);
  }
}
</style>
