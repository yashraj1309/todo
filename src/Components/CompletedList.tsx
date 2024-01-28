import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import CompletedTask from "../Atoms/CompletedTask";
import EmptyList from "../Atoms/EmptyList";
import '../Styles/CompletedTask.css';


import { RootState } from "../redux/store";
import { StateValueType } from "../redux/addSlice";
import { clearList } from "../redux/finishedSlice";

export default function CompletedList() {
  const [taskList, setTaskList] = useState<StateValueType[]>([]);

  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.addToFinishList.value);
  useEffect(() => {
    if (tasks) {
      setTaskList((prevTaskList) => {
        return tasks;
      });
    }
  }, [tasks]);

  const clearTask = () => {
    dispatch(clearList());
  };
  return (
    <>
      {taskList.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <header className="d-flex align-items-center  justify-content-center mb-5">
            <h3 style={{ textAlign: "center" }}>Completed Tasks</h3>
            <button
              type="button"
              className="btn btn-primary mx-3 mb-2"
              onClick={clearTask}
            >
              Clear Tasks
            </button>
          </header>
          <div className="completed-task">
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
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {taskList?.map((item, index) => (
                  <CompletedTask
                    task={item.task}
                    priority={item.priority}
                    index={index + 1}
                    key={item.id}
                    date={item.date?item.date:"Not Added"}
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
