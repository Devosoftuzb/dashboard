import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('../views/Dashboard/Dashboard.vue'),
        },
        {
          path: '/teams',
          name: 'team',
          component: () => import('../views/Team/Team.vue'),
        },
        {
          path: '/advantages',
          name: 'advantages',
          component: () => import('../views/Advantages/Advantages.vue'),
        },
        {
          path: '/partners',
          name: 'partners',
          component: () => import('../views/Partners/Partners.vue'),
        },
        {
          path: '/category',
          name: 'category',
          component: () => import('../views/Category/Category.vue'),
        },
        {
          path: '/portfolio',
          name: 'partfolio',
          component: () => import('../views/Portfolio/Portfolio.vue'),
        },
        {
          path: '/messages',
          name: 'messages',
          component: () => import('../views/Messages/Messages.vue'),
        },
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register/Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    },
  ]
})

export default router
