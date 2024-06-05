<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <TransitionGroup name="list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        @delete="$emit('delete', post)"
        :post="post"
      ></PostItem>
    </TransitionGroup>
  </div>
  <div v-else><h1>Список постов пуст</h1></div>
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

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
}
</style>
