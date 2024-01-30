import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { NotesType} from '../redux/notesSlice';
import Note from '../Atoms/Note';

export default function DisplayNotes() {

const [notes, setNotes] = useState <NotesType[]>([]);

  const getNotes = useSelector((state: RootState) => state.notesSlice.value); //This is reducer name

  useEffect(() => {
    if (getNotes) {
      setNotes((prevNotes) => {
        return [...prevNotes, ...getNotes];
      });
    }
  }, [getNotes]);

  console.log(notes);
  return (
    <>
      {notes.map((item) => (
        <Note note={item.note} date={item.date} title={item.title} />
      ))}
    </>
  );
}
