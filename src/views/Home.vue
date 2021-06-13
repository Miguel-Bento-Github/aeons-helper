<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.start {
  text-decoration: none;
  text-transform: capitalize;
}

.home {
  font-family: "Mate SC", serif;
  margin-bottom: 1rem;
  color: #ec7e16;
}

.home-button {
  width: 5rem;
  height: 2rem;
  background-color: #2c3e50;
  cursor: pointer;
  color: #fff;
}

.home-img {
  display: block;
  width: 90%;
  margin: 1.5rem auto 1.5rem auto;
}
</style>

<template>
  <h1 class="home">Welcome to Aeon's End helper</h1>
  <router-link class="start" to="setup">
    <button class="home-button" type="button">Setup</button>
  </router-link>
  <img
    class="home-img"
    src="https://despelvogel.com/wp-content/uploads/2019/06/Aeons-end-BANNER.png"
  />
</template>
