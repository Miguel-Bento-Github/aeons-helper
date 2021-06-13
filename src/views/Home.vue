<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.start {
  text-decoration: none;
  text-transform: capitalize;
  width: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.25rem 0.5rem;
  background-color: #2c3e50;
  cursor: pointer;
  color: #fff;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0 4px #fff;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 2px #fff;
  }
}

.home {
  font-family: "Mate SC", serif;
  margin-bottom: 1rem;
  color: #ec7e16;
}

.home-img {
  display: block;
  width: 60%;
  margin: 1.5rem auto;
}
</style>

<template>
  <h1 class="home">Welcome to Aeon's End helper</h1>
  <router-link class="start" to="setup">
    <span> Setup </span>
    <span class="material-icons"> play_arrow </span>
  </router-link>
  <img
    class="home-img"
    src="https://despelvogel.com/wp-content/uploads/2019/06/Aeons-end-BANNER.png"
  />
</template>
