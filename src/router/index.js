import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Courscesview from '@/views/Courscesview.vue'
import ExcericesView from '@/views/ExcericesView.vue'
import TestView from '@/views/TestView.vue'
import PythonExcericesView from '@/views/PythonExcericesView.vue'
import TryExcericeView from '@/views/TryExcericeView.vue'
import AngularExcericeView from '@/views/AngularExcericeView.vue'
import DashboardView from '@/views/Admin/DashboardView.vue'
import AdminCoursesView from "@/views/Admin/CoursesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/coursce",
    name: "coursce",
    component: Courscesview,
  },
  {
    path: '/exerices',
    name: 'exercises',
    component: ExcericesView
  
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
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
 
  {path: "/admin",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/admin/courses",
    name: "admin_courses",
    component: AdminCoursesView,
  },
  {
    path: "/admin/exercises",
    name: "admin_exercises",
    component: () => import('@/views/Admin/ExercisesView.vue')
  },
  {
    path: "/admin/users",
    name: "admin_users",
    component: () => import('@/views/Admin/UsersView.vue')
  },
  {
    path: "/admin/notifications",
    name: "admin_notifications",
    component: () => import('@/views/Admin/NotificationView.vue')
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
