import create from "zustand";

export const useTravelStore = create((set) => ({
  items: [],

  setItems: (items) => set({ items }),
}));
