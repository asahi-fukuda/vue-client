import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Component from '@/components/pages/Component.vue'
import TopPage from '@/components/pages/TopPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'top',
    component: TopPage,
  },
  {
    path: '/component',
    name: 'component',
    component: Component,
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
