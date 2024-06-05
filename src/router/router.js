import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import PostPage from '@/pages/PostPage.vue';
import CurrentPostPage from '@/pages/CurrentPostPage.vue';
import AboutPage from '@/pages/AboutPage.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/posts/:id',
    component: CurrentPostPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
