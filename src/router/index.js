import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Courscesview from '@/views/Courscesview.vue'
import ExcericesView from '@/views/ExcericesView.vue'
import TestView from '@/views/TestView.vue'
import PythonExcericesView from '@/views/PythonExcericesView.vue'
import TryExcericeView from '@/views/TryExcericeView.vue'
import AngularExcericeView from '@/views/AngularExcericeView.vue'

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
    path: '/exerices',
    name: 'exercises',
    component: ExcericesView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/python-excerice',
    name: 'python-excerice',
    component: PythonExcericesView
  },
  {
    path: '/angular-excerice',
    name: 'angular-excerice',
    component: AngularExcericeView
  },
  {
    path: '/do-excerice',
    name: 'do-excerice',
    component: TryExcericeView
  },
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
