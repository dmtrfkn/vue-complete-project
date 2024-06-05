import { createMemoryHistory, createRouter } from 'vue-router';
import Main from '@/pages/Main.vue';
import PostPage from '@/pages/PostPage.vue';
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
    path: '/about',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
