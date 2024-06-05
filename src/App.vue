<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__buttons">
      <Button @click="showModal">Создать пост</Button>
      <Select :options="sortOptions" v-model="selectedSort"></Select>
    </div>
    <PostList v-if="!isPostsLoading" @delete="deletePost" :posts="posts" />
    <div v-else>Идет загрузка...</div>
    <Modal v-model:show="modalVisible"><PostForm @create="createPost" /></Modal>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По значению' },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

// scoped - стили применены к именно этому компоненту

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.app {
  padding: 20px;
}

.app__buttons {
  display: flex;
  margin: 15px 0;

  justify-content: space-between;
}
</style>
