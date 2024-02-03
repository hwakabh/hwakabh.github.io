import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Works from '../components/Works.vue'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/works",
    component: Works
  }
]


export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
