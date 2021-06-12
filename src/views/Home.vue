<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.start {
  color: #f3f3f3;
  text-decoration: none;
  text-transform: capitalize;
}
</style>

<template>
  <h1 class="home">Welcome to Aeon's End helper</h1>
  <router-link class="start" to="setup">
    <button type="button">Setup</button>
  </router-link>
</template>
