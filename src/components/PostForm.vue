<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Название" />
    <input v-model="post.body" class="input" type="text" placeholder="Описание" />
    <Button @click="createPost" class="btn">Создать пост</Button>
  </form>
</template>

<script>
import Button from '@/components/UI/Button.vue';
export default {
  components: { Button },
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

.input {
  /* width: 100%; */
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
