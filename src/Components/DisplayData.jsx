import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../Atoms/Task";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { removeTodo } from "../redux/addSlice";
import { addToFinishList } from '../redux/finishedSlice'

export default function DisplayData() {
  const [taskList, setTaskList] = useState([]);
  const [toggleSort, setToggleSort] = useState(false);
  const tasks = useSelector((state) => state.addTodo.value); //This is reducer name
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks) {
      setTaskList((prevTaskList) => {
        return tasks;
      });
    }
  }, [tasks]);

  const sortHandler = () => {
   // Use the functional form of setTaskList to ensure the correct state reference
   if(toggleSort) {
    setTaskList((prevTaskList) =>
      [...prevTaskList].sort((a, b) => b.priority - a.priority)
    );
    setToggleSort(false);
   }
   else {
     setTaskList((prevTaskList) =>
       [...prevTaskList].sort((a, b) => a.priority - b.priority)
     );
    setToggleSort(true);
   }
  }

  const checkBoxHandler = (item) => {
    dispatch(removeTodo(item.id));
    dispatch(addToFinishList(item)); //for adding data to completed list;
  }

  return (
    <>
      {tasks.length !== 0 && (<>
        <header style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: 'space-evenly', marginBottom: '16px' }}>
          {" "}
          <h3>Tasks</h3>{" "}
          <Button variant="outline-primary" className="d-flex align-items-center" onClick={sortHandler} >
            Sort{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-filter"
              viewBox="0 0 16 16"
              style={{marginLeft: '4px'}}
            >
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </Button>
        </header>
      <Table striped bordered hover style={{ width: "700px", margin: "auto" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskList?.map((item, index) => (
            <Task
              task={item.task}
              priority={item.priority}
              index={index + 1}
              key={item.id}
              onChange={()=>checkBoxHandler(item)}
            />
          ))}
        </tbody>
      </Table>
     </> )}
    </>
  );
}
