<template>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in modelValue"
      :key="pageNumber"
      class="page"
      :class="{ current__page: pageNumber === page }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Number,
    page: Number,
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('updatePage', pageNumber);
    },
  },
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  gap: 5px;
  margin-top: 15px;
}
.page {
  padding: 10px;
  border: 2px solid black;
}
.current__page {
  border: 2px solid purple;
}
</style>
