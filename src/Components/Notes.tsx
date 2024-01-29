import { useState } from "react";
import Button from "react-bootstrap/Button";
import CustomToast from "../Atoms/CustomToast";

export default function Notes() {
  const [note, setNote] = useState("");
  const [toastHandler, setToastHandler] = useState(false);
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
  };
  return (
    <>
      {toastHandler && <CustomToast ToastHandler={ToastHandler} />}
      <div className="container d-flex align-center flex-column notes-main text-center">
        <h3 className="mb-3">Notepad : Add Notes</h3>
        <div>
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
        {/* <div>
        <h3>Preview:</h3>
        <p>{note}</p>
      </div> */}
        <div>
          <Button
            variant="primary"
            className="m-3"
            style={{ width: "20%" }}
            onClick={addNoteClickHandler}
          >
            ADD NOTE
          </Button>
        </div>
      </div>
    </>
  );
}
