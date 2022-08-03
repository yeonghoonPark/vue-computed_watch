import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/watch',
    name: 'WatchVeiw',
    component: () =>
      import(/* webpackChunkName: "watch" */ '../views/WatchVeiw.vue'),
  },
  {
    path: '/computed_watch',
    name: 'Computed_WatchView',
    component: () =>
      import(
        /* webpackChunkName: "computed_watch" */ '../views/Computed_WatchView.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
