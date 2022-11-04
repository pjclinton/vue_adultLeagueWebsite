import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/roster',
    name: 'roster',

    component: () => import('../views/RosterView.vue')
  },
  {
    path: '/add-player',
    name: 'add-player',

    component: () => import('../views/AddPlayerView.vue')
  },
  { 
    path: '/standings',
    name: 'standings',
    component: () => import('../views/StandingsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
