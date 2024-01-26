import Form from "react-bootstrap/Form";
import { useState } from "react";

interface propsTaskDate {
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: string;
}

export default function TaskDate(props: propsTaskDate) {
  const [show, setShow] = useState("no");
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ width: "100%", gap: "1rem" }}
      >
        <p>Want to add deadline ?</p>
        <Form.Group className="d-flex" style={{ gap: "1rem" }}>
          <Form.Check
            type="radio"
            label="Yes"
            value="yes"
            name="deadline"
            onChange={() => setShow("yes")}
          />
          <Form.Check
            type="radio"
            label="No"
            value="no"
            name="deadline"
            onChange={() => setShow("no")}
          />
        </Form.Group>
      </div>
      {show === "yes" && (
        <div className="form-date">
          <label htmlFor="dateInput">Select a Date:</label>
          <input
            type="date"
            id="dateInput"
            value={props.date}
            onChange={props.handleDateChange}
            min={getCurrentDate()}
          />
        </div>
      )}
    </>
  );
}
