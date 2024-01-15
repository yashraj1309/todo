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
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = counterSlice.actions;

export default counterSlice.reducer;
