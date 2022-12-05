import { createRouter, createWebHistory } from 'vue-router';
import CounterViewVue from '@/counter/views/CounterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-view',
      component: CounterViewVue,
    },
  ],
});

export default router;
