import { graveholdCollection } from "@/firebase";
import { onUnmounted, ref } from "vue";

/**
 * Load users hook.
 *
 * Whenever changes are detected in the database we update the hook.
 *
 * @returns The list of players
 */
export const useLoadGravehold = () => {
  const gravehold = ref(0);
  const close = graveholdCollection.onSnapshot((snapshot) => {
    const [data] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    gravehold.value = data.gravehold;
  });

  onUnmounted(close);
  return gravehold;
};

/**
 * @returns Gravehold
 */
export const getGravehold = async () => {
  const gravehold = await graveholdCollection.doc("gravehold").get();
  return gravehold.exists ? gravehold.data() : null;
};

/**
 * Updates gravehold
 * @param {health: number} gravehold
 */
export const updateGravehold = async (gravehold) => {
  await graveholdCollection.doc("gravehold").update(gravehold);
};
