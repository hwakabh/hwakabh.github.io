import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
// import Cv from '../pages/Cv.vue';
import Works from '../pages/Works.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  // {
  //   path: "/cv",
  //   component: Cv
  // },
  {
    path: "/works",
    component: Works
  },
  {
    path: "/contact",
    component: Contact
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
