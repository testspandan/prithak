import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppIncall from '../views/incall.vue'
import IntroView from '../views/intro.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'IntroView',
    component: IntroView
  },
  {
    path: '/call',
    name: 'Call',
    component: AppIncall
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
