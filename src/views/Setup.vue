<script>
import Creation from "@/components/Creation.vue";
import Players from "@/components/Players.vue";
import Nemesis from "@/components/Nemesis.vue";
import Difficulty from "@/components/Difficulty.vue";

export default {
  components: {
    Creation,
    Players,
    Nemesis,
    Difficulty,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
</style>

<template>
  <div class="wrapper">
    <div>
      <h1>Creation</h1>
      <creation />
    </div>
    <div>
      <h1>Players</h1>
      <players />
    </div>
    <div>
      <h1>Nemesis</h1>
      <nemesis />
    </div>
    <div>
      <h1>Difficulty</h1>
      <difficulty />
    </div>
  </div>
</template>
