<template>
  <div>
    <h1>Страница с постами</h1>
    <Input
      v-focus
      :modelValue="searchQuery"
      @update:modelValue="setSearchQuery"
      placeholder="Поиск..."
    />
    <div class="app__buttons">
      <Button @click="showModal">Создать пост</Button>
      <Select
        :options="sortOptions"
        :modelValue="selectedSort"
        @update:modelValue="setSelectedSort"
      ></Select>
    </div>
    <Modal v-model:show="modalVisible"><PostForm @create="createPost" /></Modal>
    <PostList v-if="!isPostsLoading" @delete="deletePost" :posts="sortedAndSearchedPosts" />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <PageList v-model="totalPages" :page="page" @updatePage="changePage"></PageList> -->
  </div>
</template>

<script>
import PageList from '@/components/PageList.vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    PostForm,
    PageList,
    PostList,
  },
  data() {
    return { modalVisible: false };
  },
  methods: {
    ...mapMutations({
      setState: 'post/setState',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({ loadMorePosts: 'post/loadMorePosts', fetchPosts: 'post/fetchPosts' }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
  },
  watch: {},
};
</script>

// scoped - стили применены к именно этому компоненту

<style scoped>
.app__buttons {
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
}
.observer {
  height: 30px;
  background-color: green;
}
</style>
