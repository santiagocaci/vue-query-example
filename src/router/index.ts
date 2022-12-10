import { createRouter, createWebHistory } from 'vue-router';

import CounterViewVue from '@/counter/views/CounterView.vue';
import CounterSetupViewVue from '@/counter/views/CounterSetupView.vue';

import ClientsLayoutVue from '@/clients/layouts/ClientsLayout.vue';
import ClientView from '@/clients/views/ClientView.vue';
import ListView from '@/clients/views/ListView.vue';

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
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayoutVue,
      redirect: { name: 'list' },
      children: [
        {
          path: 'list',
          name: 'list',
          component: ListView,
        },
        { path: '/clients/:id', name: 'client-id', component: ClientView },
      ],
    },
  ],
});

export default router;
