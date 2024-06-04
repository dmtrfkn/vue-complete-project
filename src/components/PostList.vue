<template>
  <div>
    <h3>Список пользователей</h3>
    <PostItem v-for="post in posts" :post="post"></PostItem>
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
};
</script>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
}
</style>
