import axios from 'axios';
import { ref, onMounted } from 'vue';

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _limit: limit,
          _page: 1,
        },
      });
      totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);
      posts.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isPostsLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    posts,
    isPostsLoading,
    totalPages,
  };
}
