import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Todo from '../views/todo.vue'
import AboutDetails from '../views/AboutDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about/:id',
    name: 'AboutDetails',
    component: AboutDetails,
    props: true
  },
  {
    path: '/all-about',
    redirect: '/about'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
