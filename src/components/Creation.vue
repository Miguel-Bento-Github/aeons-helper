<script>
import { reactive } from "@vue/reactivity";
import { createPlayer } from "@/api/player";
import { fields, defaultFields } from "@/players/players";
import { resetObjectValues } from "@/utils/resetObjectValues";

export default {
  setup() {
    const form = reactive({ ...defaultFields });

    const onSubmit = async () => {
      try {
        await createPlayer({ ...form });
        resetObjectValues(form);
      } catch ({ message }) {
        console.error(message);
      }
    };

    return { form, onSubmit, fields };
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div v-for="field in fields" :key="field">
      <label for="name">
        {{ field }}
      </label>
      <input id="name" v-model="form[field]" required />
    </div>
    <button type="submit">Create player</button>
  </form>
</template>
