<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <Input v-model="searchQuery" placeholder="Поиск..." />
    <div class="app__buttons">
      <Button @click="showModal">Создать пост</Button>
      <Select :options="sortOptions" v-model="selectedSort"></Select>
    </div>
    <Modal v-model:show="modalVisible"><PostForm @create="createPost" /></Modal>
    <PostList v-if="!isPostsLoading" @delete="deletePost" :posts="sortedAndSearchedPosts" />
    <div v-else>Идет загрузка...</div>
    <div ref="observer" class="observer"></div>
    <!-- <PageList v-model="totalPages" :page="page" @updatePage="changePage"></PageList> -->
  </div>
</template>

<script>
import PageList from '@/components/PageList.vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PageList,
    PostList,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _limit: this.limit,
            _page: this.page,
          },
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _limit: this.limit,
            _page: this.page,
          },
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        // console.log(error);
      }
    },
    // changePage(currentPage) {
    //   this.page = currentPage;
    // },
  },
  mounted() {
    this.fetchPosts();
    let options = {
      rootMargin: '0px',
      threshold: 1.0,
    };

    let callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]),
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },
  },
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
