import React from 'react'

export default function Task(props) {
  const priority = ["Low", "Medium", "High"];
  const colors = ["green", "orange", "red"];
  return (
    <tr key={props.key}>
      <td>{props.index}</td>
      <td> {props.task} </td>
      <td style={{textAlign: 'left', paddingLeft: "14%"}}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill={colors[props.priority-1]}
          class="bi bi-circle-fill"
          viewBox="0 0 16 16"
          style={{marginRight: "16px"}}
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
        {priority[props.priority - 1]}
      </td>
    </tr>
  );
}
