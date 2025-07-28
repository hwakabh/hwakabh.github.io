import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Works from '../pages/Works.vue';
import Contact from '../pages/Contact.vue';
import Blog from '../pages/Blog.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/works", component: Works },
  { path: "/contact", component: Contact },
  { path: "/blog", component: Blog },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
