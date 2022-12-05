import { defineStore } from 'pinia';

type State = {
  count: number;
  lastChanged?: Date;
};

export const useCounterOptionsStore = defineStore('counterOptions', {
  state: (): State => ({
    count: 0,
    lastChanged: undefined,
  }),

  getters: {
    squareCount: state => state.count * state.count,
  },

  actions: {
    incrementBy(value: number) {
      this.count += value;
      this.lastChanged = new Date();
    },
    incrementByOne() {
      this.incrementBy(1);
    },
  },
});
