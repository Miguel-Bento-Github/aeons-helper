<script>
import { useLoadNemesis } from "@/api/nemesis";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const data = ref(null);
    const activeNemesis = computed(() => store.state.nemesis);

    const updateNemesis = (nemesis) => {
      store.commit("setNemesis", nemesis);
    };

    onMounted(async () => {
      const { nemesis } = await useLoadNemesis();
      data.value = nemesis;
    });

    return { data, activeNemesis, updateNemesis };
  },
};
</script>

<template>
  <section>
    <select v-model="activeNemesis.name">
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
      <p>Health: {{ activeNemesis.health }}</p>
    </div>
  </section>
</template>
