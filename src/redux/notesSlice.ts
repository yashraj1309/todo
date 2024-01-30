import { createSlice } from "@reduxjs/toolkit";

export interface NotesType {
    note: string;
    date: string;
    title: string;
}

export interface NoteStateType {
    value : NotesType[];
}

const initialState : NoteStateType= {
    value : []
}

export const notesSlice = createSlice({
    name: 'addnotes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.value = [...state.value, action.payload] //payload type will be notesType
        }
    }
})

// Action creators are generated for each case reducer function
export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;