<script>
import { useLoadNemesis } from "@/api/nemesis";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import store from "@/store";

export default {
  setup() {
    const data = ref(null);
    let activeNemesis = ref({});
    const activeNemesisName = "";
    const difficulty = computed(() => store.state.difficulty);

    onMounted(async () => {
      const { nemesis } = await useLoadNemesis();
      data.value = nemesis;
    });

    const updateNemesis = (nemesis) => {
      activeNemesis.value = { ...nemesis };

      if (difficulty.value === "easy") {
        activeNemesis.value.health = nemesis.health - 10;
      }
      if (difficulty.value === "expert") {
        activeNemesis.value.health = nemesis.health + 10;
      }
    };

    return { data, activeNemesis, activeNemesisName, updateNemesis };
  },
};
</script>

<template>
  <section>
    <select v-model="activeNemesisName">
      <option
        @click="updateNemesis(nemesis)"
        v-for="nemesis in data"
        :key="nemesis"
        :value="nemesis.name"
      >
        {{ nemesis.name }}
      </option>
    </select>

    <div v-if="activeNemesis" class="container">
      <h1>
        {{ activeNemesis.name }}
      </h1>
      <p>{{ activeNemesis.health }}</p>
    </div>
  </section>
</template>
