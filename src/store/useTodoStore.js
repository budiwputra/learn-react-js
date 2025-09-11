import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTodoStore = create(persist((set) => ({
    list : [{
        title : 'cuci',
        desc : 'baju',
        category : 'desain'

    }, {
        title : 'cuci',
        desc : 'motor',
        category : 'desain'
    }
    ],
    setList : (data) => set((state) => ({ list : [data, ...state.list]})),
    updateList : (index, data) => set((state) => {  
        const newData = [...state.list]
        newData[index] = data
        return {
            list : newData  
        }
    })

}), 
{
    name : 'list',
    storage : createJSONStorage( () => localStorage)
}))
export default useTodoStore