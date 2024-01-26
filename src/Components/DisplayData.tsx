import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../Atoms/Task";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { removeTodo } from "../redux/addSlice";
import { addToFinishList } from '../redux/finishedSlice'
import { StateValueType } from "../redux/addSlice";
import { RootState } from "../redux/store";
import EditForm from "./EditForm";
import '../Styles/DisplayData.css';

export default function DisplayData() {
  const [taskList, setTaskList] = useState<StateValueType[]>([]);
  const [toggleSort, setToggleSort] = useState(false);
  const tasks = useSelector((state : RootState) => state.addTodo.value); //This is reducer name
  const [editShow, setEditShow] = useState(false);
  const [editId, setEditId] = useState(-1);
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

  const checkBoxHandler = (item : StateValueType) => {
    dispatch(removeTodo(item.id));
    dispatch(addToFinishList(item)); //for adding data to completed list;
  }

  const editClickHandler = (item: StateValueType) => {
    setEditShow(true);
    setEditId(item.id);
  }

  const closeEditForm = () => {
    setEditShow(false);
    setEditId(-1);
  }

  return (
    <>
      {tasks.length !== 0 && (
        <>
          {editShow && <EditForm id={editId} closeEditForm={closeEditForm} />}
          <header
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "space-evenly",
              marginBottom: "16px",
            }}
          >
            {" "}
            <h3>Tasks</h3>{" "}
            <Button
              variant="outline-primary"
              className="d-flex align-items-center"
              onClick={sortHandler}
            >
              Sort{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-filter"
                viewBox="0 0 16 16"
                style={{ marginLeft: "4px" }}
              >
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
              </svg>
            </Button>
          </header>
          <div className="table-list">
            <Table
              striped
              bordered
              hover
              style={{ width: "90%", margin: "auto" }}
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Task</th>
                  <th>Priority</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {taskList?.map((item, index) => (
                  <Task
                    task={item.task}
                    priority={item.priority}
                    index={index + 1}
                    key={item.id}
                    date={item.date}
                    onChange={() => checkBoxHandler(item)}
                    editClick={() => editClickHandler(item)}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}
