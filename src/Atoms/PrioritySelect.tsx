// PrioritySelect component
import React from "react";
import Form from "react-bootstrap/Form";

interface PrioritySelectProps {
  setPriority: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function PrioritySelect(props: PrioritySelectProps) {
  return (
    <Form.Select
      className="m-3"
      style={{ width: "fit-content" }}
      onChange={props.setPriority}
    >
      <option value="0">Priority</option>
      <option value="1" style={{ color: "green" }}>
        Low
      </option>
      <option value="2" style={{ color: "orange" }}>
        Medium
      </option>
      <option value="3" style={{ color: "red" }}>
        High
      </option>
    </Form.Select>
  );
}
