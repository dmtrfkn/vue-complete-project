<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <Input v-focus v-model="post.title" placeholder="Название" />
    <Input v-model="post.body" placeholder="Описание" />
    <Button @click="createPost" class="btn">Создать пост</Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
}
h4 {
  margin: 0;
}
</style>
