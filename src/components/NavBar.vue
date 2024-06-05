<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <Button @click="$router.push('/posts')">Посты</Button>
      <Button @click="$router.push('/about')">О сайте</Button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  display: flex;
  gap: 20px;
  margin-left: auto;
}
</style>
