import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Courscesview from '@/views/Courscesview.vue'
import ExcericesView from '@/views/ExcericesView.vue'
import TestView from '@/views/TestView.vue'
import DashboardView from '@/views/Admin/DashboardView.vue'

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
  {
    path: '/admin',
    component: DashboardView,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/Admin/DashboardView.vue')
      },
      {
        path: 'courses',
        name: 'courses',
        // component: () => import('@/views/Admin/CoursesView.vue')
      },
      {
        path: 'tests',
        name: 'tests',
        // component: () => import('@/views/Admin/TestsView.vue')
      }
    ]
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
