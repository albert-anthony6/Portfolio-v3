import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always be at top page view
    return { x: 0, y: 0 };
  },
});

export default router;
