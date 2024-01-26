import React from "react";

interface CompletedTaskType {
  key: number,
  index: number, 
  task: string,
  priority: number
}

export default function CompletedTask(props: CompletedTaskType) {
  const priority = ["Low", "Medium", "High"];
  const colors = ["green", "orange", "red"];
  return (
    <tr key={props.key}>
      <td>{props.index}</td>
      <td> {props.task} </td>
      <td
        style={{
          verticalAlign: 'middle',
          textAlign: 'left',
          width: '120px',
          paddingLeft: '20px'
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
          style={{marginRight: '8px'}}
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
        {priority[props.priority - 1]}
      </td>
    </tr>
  );
}
