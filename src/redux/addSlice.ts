import { createSlice } from "@reduxjs/toolkit";

export interface StateValueType {
  task: string;
  priority: number;
  id: number;
  date?: string;
}

 interface StateType {
  value : StateValueType[];
}


const initialState : StateType = {
  value: []
};

export const counterSlice = createSlice({
  name: "add", //for dev tools
  initialState,
  reducers: {
    addTodo: (state, action) => {
     state.value = [...state.value, action.payload]
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((item)=> item.id !== action.payload)
    },
    editTodo: (state, action) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, editTodo } = counterSlice.actions;

export default counterSlice.reducer;  
