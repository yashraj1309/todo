import React from 'react'
import Form from "react-bootstrap/Form";

interface TaskType {
  key: number;
  index: number;
  task: string;
  priority: number,
  onChange: ()=>void,
  editClick: ()=>void
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
          <Form.Check type="checkbox" onChange={props.onChange} />
        </Form>
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
          onClick={props.editClick}
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </td>
    </tr>
  );
}
