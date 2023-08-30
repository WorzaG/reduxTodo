import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        items:[
            {
                id:1,
                text:'eve git',
                color:'green'
            }
        ],
        search : ""
    },
    reducers:{
        addTodo : (state,action) => {
            state.items.push(action.payload)
        },
        todoDelete : (state,action) => {
            state.items = state.items.filter((item)=> item.id !== action.payload)
           
        },
        search : (state,action) => {
            state.search = action.payload
        }
    }
})

export const {addTodo , todoDelete,search} = todoSlice.actions
export default todoSlice.reducer;
