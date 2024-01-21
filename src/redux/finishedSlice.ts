import { createSlice } from "@reduxjs/toolkit";

interface StateValueType {
  task: string;
  priority: number;
  id: number;
}

interface StateType {
  value: StateValueType[];
}

const initialState: StateType = {
  value: [],
};

export const finishTodoSlice = createSlice({
  name: "addToFinishList",
  initialState,
  reducers: {
    addToFinishList: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    clearList: (state) => initialState
  },
});

export const { addToFinishList, clearList } = finishTodoSlice.actions;

export default finishTodoSlice.reducer;