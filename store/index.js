import create from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
  removeAllBears: () =>
    set({
      bears: 0,
    }),
  addBear: (amount) =>
    set((state) => ({
      bears: state.bears + amount,
    })),
}));

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  resetCart: () => set((state) => ({
    cart: []
  })),
}));
