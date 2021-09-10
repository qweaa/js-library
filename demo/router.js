import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
  path: '/:pathMatch(.*)',
  redirect: '/home'
}, {
  path: "/home",
  component: () => import('./pages/home/index.vue')
}, {
  path: "/example",
  component: () => import('./pages/example/index.vue')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;