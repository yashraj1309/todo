import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "../Atoms/Task";
import Table from "react-bootstrap/Table";

export default function DisplayData() {
  const [taskList, setTaskList] = useState([]);
  const tasks = useSelector((state) => state.addTodo.value); //This is reducer name
  console.log(tasks);

  useEffect(() => {
    console.log("Tasks from Redux:", tasks);

    if (tasks) {
      setTaskList(tasks);
      console.log("Task List updated:", taskList);
    }
  }, [tasks]);

  return (
    <>
      {tasks.length !== 0 && <h3>Tasks</h3>}
      <Table striped bordered hover style={{width:"700px",margin:'auto'}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {taskList?.map((item, index) => (
            <Task
              task={item.task}
              priority={item.priority}
              index={index + 1}
              key={item.id}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}
