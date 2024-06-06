import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import PostPage from '@/pages/PostPage.vue';
import CurrentPostPage from '@/pages/CurrentPostPage.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi.vue';
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
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
