import React from 'react'
import Form from "react-bootstrap/Form";

export default function Task(props) {
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
          class="bi bi-circle-fill"
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
