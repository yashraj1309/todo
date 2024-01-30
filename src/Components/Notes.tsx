import { useState } from "react";
import Button from "react-bootstrap/Button";
import CustomToast from "../Atoms/CustomToast";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlice";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import '../Styles/Notes.css';

export default function Notes() {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [toastHandler, setToastHandler] = useState(false);

  const dispatch = useDispatch();
  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

    const ToastHandler = () => {
        setToastHandler(false);
    };

  const addNoteClickHandler = () => {
    if(note==="") {
        setToastHandler(true);
        return;
    }
    if(title==="") {
      setToastHandler(true);
      return;
    }
    const currentTimestamp = new Date();
    dispatch(
      addNote({ title: title, date: currentTimestamp.toString(), note: note })
    );
    alert("Note Added Successfully.")
    setTitle("");
    setNote("");
  };
  return (
    <>
      {toastHandler && <CustomToast ToastHandler={ToastHandler} />}
      <div className="notes-main">
        <div className="d-flex">
          <h3 className="mb-3 mx-3">Notepad : Add Notes</h3>
          <Link to="/displaynotes">
            <Button variant="outline-success" style={{ marginRight: "20px" }}>
              Note Archive
            </Button>
          </Link>
        </div>
        <div>
          <InputGroup className="mb-3" style={{ width: "100%" }}>
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
              placeholder="Title"
              aria-label="TItle"
              aria-describedby="basic-addon1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
          <textarea
            rows={10}
            cols={50}
            value={note}
            onChange={handleNoteChange}
            placeholder="Write your note here..."
            style={{ padding: ".5rem 1rem", outline: "none", resize: "none" }}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <Button
            variant="primary"
            className="m-3 px-4"
            onClick={addNoteClickHandler}
          >
            ADD NOTE
          </Button>
        </div>
      </div>
    </>
  );
}
