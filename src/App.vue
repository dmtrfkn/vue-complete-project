<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Javascript', body: 'Описание поста' },
        { id: 2, title: 'Javascript 2', body: 'Описание поста 2' },
        { id: 3, title: 'Javascript 3', body: 'Описание поста 3' },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
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
</style>
