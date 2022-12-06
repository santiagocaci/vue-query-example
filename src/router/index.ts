import { createRouter, createWebHistory } from 'vue-router';
import CounterViewVue from '@/counter/views/CounterView.vue';
import CounterSetupViewVue from '@/counter/views/CounterSetupView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-view',
      component: CounterViewVue,
    },
    {
      path: '/counter-setup',
      name: 'counter-setup',
      component: CounterSetupViewVue,
    },
  ],
});

export default router;
