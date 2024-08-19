import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Courscesview from '@/views/Courscesview.vue'
import ExcericesView from '@/views/ExcericesView.vue'
import TestView from '@/views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/coursce',
    name: 'coursce',
    component: Courscesview
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: ExcericesView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
