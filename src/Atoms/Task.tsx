import React from 'react'
import Form from "react-bootstrap/Form";

interface TaskType {
  key: number;
  index: number;
  task: string;
  priority: number,
  onChange: ()=>void
}

export default function Task(props: TaskType) {
  const priority = ["Low", "Medium", "High"];
  const colors = ["green", "orange", "red"];
  return (
    <tr key={props.key}>
      <td>{props.index}</td>
      <td> {props.task} </td>
      <td
        style={{
          paddingLeft: "34%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill={colors[props.priority - 1]}
          className="bi bi-circle-fill"
          viewBox="0 0 16 16"
          style={{ marginRight: "16px" }}
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
        {priority[props.priority - 1]}
      </td>
      <td>
        <Form>
          <Form.Check
            type="checkbox"
            onChange={props.onChange}
          />
        </Form>
      </td>
    </tr>
  );
}
