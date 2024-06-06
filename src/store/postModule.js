import axios from 'axios';

export const postModule = {
  namespaced: true,
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]),
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, isPostsLoading) {
      state.isPostsLoading = isPostsLoading;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _limit: state.limit,
            _page: state.page,
          },
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        commit('setPosts', response.data);
      } catch (error) {
        console.log(error);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _limit: state.limit,
            _page: state.page,
          },
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        commit('setPosts', [...state.posts, ...response.data]);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
