<template>
  <div>
    <h1>Страница с постами</h1>
    <!-- <Input v-focus v-model="searchQuery" placeholder="Поиск..." /> -->
    <div class="app__buttons">
      <Button>Создать пост</Button>
      <Select :options="sortOptions" v-model="selectedSort"></Select>
    </div>
    <Modal v-model:show="modalVisible">
      <PostForm />
    </Modal>
    <PostList v-if="!isPostsLoading" :posts="sortedPosts" />
    <div v-else>Идет загрузка...</div>
    <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
    <!-- <PageList v-model="totalPages" :page="page" @updatePage="changePage"></PageList> -->
  </div>
</template>

<script>
import PageList from '@/components/PageList.vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';

export default {
  components: {
    PostForm,
    PageList,
    PostList,
  },
  data() {
    return {
      modalVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По значению' },
      ],
    };
  },
  setup(props) {
    const { isPostsLoading, posts, totalPages } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    // const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts);

    return {
      isPostsLoading,
      posts,
      totalPages,
      selectedSort,
      sortedPosts,
    };
  },
  methods: {},
  computed: {},
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
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
