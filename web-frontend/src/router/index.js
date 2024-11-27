import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Works from '../pages/Works.vue';
import Contact from '../pages/Contact.vue';
import Help from '../pages/Help.vue';

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
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/help",
    component: Help
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
