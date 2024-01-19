import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const counterSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    addTodo: (state, action) => {
     state.value = [...state.value, action.payload]
     console.log(state.value);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((item)=> item.id !== action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = counterSlice.actions;

export default counterSlice.reducer;