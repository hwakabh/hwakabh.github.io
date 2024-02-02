import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Home.vue'
import About from '../About.vue'
import Works from '../Works.vue'

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
