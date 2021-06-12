<script>
import { useLoadNemesis } from "@/api/nemesis";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const data = ref(null);

    onMounted(async () => {
      const { nemesis } = await useLoadNemesis();
      data.value = nemesis;
    });

    return { data };
  },
};
</script>

<template>
  <section>
    <div v-for="nemesis in data" :key="nemesis">
      <span>{{ nemesis.name }} </span>
      <span>{{ nemesis.health }} </span>
    </div>
  </section>
</template>
