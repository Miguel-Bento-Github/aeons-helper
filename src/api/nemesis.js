import { nemesisCollection } from "@/firebase";
import { FieldValue } from "../firebase";

/**
 * Load users hook.
 *
 * Whenever changes are detected in the database we update the hook.
 *
 * @returns The list of players
 */
export const useLoadNemesis = async () => {
  const nemesisRef = await nemesisCollection.doc("nemesis");
  const doc = await nemesisRef.get();
  return await doc.data();
};

/**
 * Updates the Nemesis
 * @param {{ name: string, health: number }} nemesis
 */
export const updateNemesis = async (nemesis) => {
  return await nemesisCollection.doc("nemesis").update(nemesis);
};

/**
 * Delete nemesis
 */
export const deleteNemesis = async () => {
  const ref = await nemesisCollection.doc("nemesis");
  await ref.update({
    active: FieldValue.delete(),
  });
};
