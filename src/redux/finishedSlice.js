import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const finishTodoSlice = createSlice({
  name: "addToFinishList",
  initialState,
  reducers: {
    addToFinishList: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addToFinishList } = finishTodoSlice.actions;

export default finishTodoSlice.reducer;