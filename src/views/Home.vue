<script>
import Creation from "@/components/Creation.vue";
import Players from "@/components/Players.vue";

export default {
  name: "Home",
  components: {
    Creation,
    Players,
  },
};
</script>

<template>
  <div class="home">
    <Creation />
    <Players />
  </div>
</template>
