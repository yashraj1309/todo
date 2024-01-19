import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import CompletedTask from "../Atoms/CompletedTask";

export default function CompletedList() {
  const [taskList, setTaskList] = useState([]);

  const tasks = useSelector((state) => state.addToFinishList.value);
  useEffect(() => {
    if (tasks) {
      setTaskList((prevTaskList) => {
        return tasks;
      });
    }
  }, [tasks]);
  console.log(taskList);
  return (
    <>
      {taskList.length === 0 ? (
        <div style={{color:'red', fontWeight: 'bold'}}>No Tasks are Completed..</div>
      ) : (
        <>
          <h3 style={{ textAlign: "center" }} className="mb-5">
            Completed Tasks
          </h3>
          <Table
            striped
            bordered
            hover
            style={{ width: "700px", margin: "auto" }}
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {taskList?.map((item, index) => (
                <CompletedTask
                  task={item.task}
                  priority={item.priority}
                  index={index + 1}
                  key={item.id}
                />
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
