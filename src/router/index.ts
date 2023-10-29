import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import TodoesView from '../views/TodoesView.vue'
import WeatherView from '../views/WeatherView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/todoes',
      name: 'todoes',
      component: TodoesView
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
