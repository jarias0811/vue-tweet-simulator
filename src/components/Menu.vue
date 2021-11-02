<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Tweet Simulator</span>

      <button class="btn ps-4 pe-4"
              :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
              @click="toggleForm">New Tweet
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    toggleForm: Function,
    showForm: Boolean,
  },
};
</script>

<style scoped>

</style>
