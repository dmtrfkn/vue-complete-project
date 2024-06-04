<template>
  <div class="app">
    <form>
      <h4>Создание поста</h4>
      <input class="input" type="text" placeholder="Название" />
      <input class="input" type="text" placeholder="Описание" />
      <button class="btn">Создать пост</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'Javascript', body: 'Описание поста' },
        { id: 2, title: 'Javascript 2', body: 'Описание поста 2' },
        { id: 3, title: 'Javascript 3', body: 'Описание поста 3' },
      ],
    };
  },
  methods: {},
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

.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
  color: teal;
  outline: none;
}
</style>
