// apps\stores\index.ts
// bug: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?

import { useToDoStore } from "./toDoStore";

export const useStore = () => {
  const pinia = usePinia();
  if (!pinia) {
    throw new Error(
      "Pinia is not initialized. Make sure to call `app.use(pinia)` in your Nuxt plugin."
    );
  }
  return {
    todoStore: useToDoStore(),
  };
};
