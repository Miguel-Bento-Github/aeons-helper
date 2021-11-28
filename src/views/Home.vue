<script>
export default {
  name: "Home",
};
</script>

<template>
  <h1 class="home">Welcome to Aeon's End helper</h1>
  <router-link class="button" to="setup">
    <span>Settings</span>
    <span>▷</span>
  </router-link>
</template>

<style lang="scss" scoped>
.button {
  min-width: max-content;
  display: flex;
  justify-content: center;
  margin: 4rem auto auto;
  padding: 1rem 2rem;
}

span + span {
  margin-left: 1ch;
}
</style>
