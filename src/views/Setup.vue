<script>
import Creation from "@/components/Creation.vue";
import Players from "@/components/Players.vue";
import Nemesis from "@/components/Nemesis.vue";

export default {
  components: {
    Creation,
    Players,
    Nemesis,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>

<template>
  <div class="wrapper">
    <div>
      <h1>Creation</h1>
      <creation class="creation" />
      <h1>Nemesis</h1>
      <nemesis />
    </div>
    <div>
      <h1>Players</h1>
      <players class="players" />
    </div>
  </div>
</template>
