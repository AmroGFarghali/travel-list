import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// export const useTravelStore = create((set) => ({
//   items: [],

//   setItems: (items) => set({ items }),
// }));
export const useTravelStore = create(
  persist(
    (set) => ({
      items: [],
      setItems: (items) => set({ items }),
    }),
    {
      name: "travel-storage", // unique name for the storage
      getStorage: () => localStorage, // (optional) by default localStorage is used
    }
  )
);
