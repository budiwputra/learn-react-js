import { create } from "zustand"
import {persist, createJSONStorage} from 'zustand/middleware'

const useTodoListStore = create(persist((set) => ({
    list :[],
    setList : (data) => set((state) => ({ list : [data, ...state.list]}))

}) ,{
    name: 'todolist',
    storage: createJSONStorage(() => sessionStorage)
}))
export default useTodoListStore