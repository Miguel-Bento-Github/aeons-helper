import { nemesisCollection } from "@/firebase";

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
  return doc.data();
};
