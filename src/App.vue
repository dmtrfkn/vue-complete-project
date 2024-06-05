<template>
  <NavBar />
  <div class="app">
    <RouterView />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.app {
  padding: 20px;
}
</style>
