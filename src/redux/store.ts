import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./addSlice";
import finishedSlice from "./finishedSlice";
import notesSlice from "./notesSlice";

export const store = configureStore({
  reducer: {
    addTodo: addReducer,
    addToFinishList: finishedSlice,
    notesSlice: notesSlice
  },
});

export type RootState = ReturnType<typeof store.getState>; // Use store.getState()

