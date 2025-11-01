import { create } from "zustand";

const Count2 = create((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  increaseBy: (value) =>
    set((state) => ({
      count: state.count + value,
    })),
  decrease: () => set((state) => ({ count: state.count - 1 })),

  decreaseBy: (value) =>
    set((state) => ({
      count: state.count - value,
    })),
}));
// 짜증난다잉?
export default Count2;
