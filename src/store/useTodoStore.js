import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTodoStore = create(persist((set) => ({
    list : [{
        title : 'cuci',
        desc : 'baju'
    }, {
        title : 'cuci',
        desc : 'motor'
    }
    ],
    setList : (data) => set((state) => ({ list : [data, ...state.list]}))

}), 
{
    name : 'list',
    storage : createJSONStorage( () => localStorage)
}))
export default useTodoStore