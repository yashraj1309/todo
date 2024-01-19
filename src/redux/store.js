import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./addSlice";
import finishedSlice from "./finishedSlice";

export const store = configureStore({
  reducer: {
    addTodo: addReducer,
    addToFinishList: finishedSlice
  },
});
