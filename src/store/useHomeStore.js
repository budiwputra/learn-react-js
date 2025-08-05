import { create } from "zustand"

const useHomeStore = create( (set) => ({   // tolong jelasin set
    count : 0,
    setCount : (value) => set({count : value}) // value
}))

export default useHomeStore