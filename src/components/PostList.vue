<template>
  <div>
    <h3>Список пользователей</h3>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      @delete="$emit('delete', post)"
      :post="post"
    ></PostItem>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped></style>
