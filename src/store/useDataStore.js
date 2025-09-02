import { create } from "zustand";

const useDataStore = create( (set) => ({
    count : 0,
    setCount : (value) => set({count : value})
}))

export default useDataStore