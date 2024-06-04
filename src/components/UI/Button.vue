<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  props: {
    text: String,
    required: true,
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
  color: teal;
  outline: none;
}
</style>
