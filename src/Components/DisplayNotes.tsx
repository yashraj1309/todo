import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { NotesType} from '../redux/notesSlice';
import Note from '../Atoms/Note';
import Empty from '../Atoms/Empty';

export default function DisplayNotes() {

const [notes, setNotes] = useState <NotesType[]>([]);

  const getNotes = useSelector((state: RootState) => state.notesSlice.value); //This is reducer name
  const emptyMessage = "No Notes are added..";
  const url = "/notes";
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
      {notes.length===0 ? <Empty message={emptyMessage}  returnUrl={url}/> : notes.map((item) => (
        <Note note={item.note} date={item.date} title={item.title} />
      ))}
    </>
  );
}
