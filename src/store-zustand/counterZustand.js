import { create } from 'zustand'

// Zustand merges ...state, so it's not needed to state it in our functions
// When working with objects, Zustand only merges state at one level, if you have a nested object, you need to merge them explicitly.
const useCounterStore = create((set) => ({
  counter: 0,
  showCounter: true,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  setByN: (payload) => set(() => ({ counter: +payload.amount })),
  toggleCounter: () => set((state) => ({ showCounter: !state.showCounter })),
}))

export default useCounterStore