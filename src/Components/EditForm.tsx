import { useState } from "react";
import { useDispatch } from "react-redux";

import "../Styles/EditForm.css";

import TaskForm from "../Atoms/TaskForm";
import CustomToast from "../Atoms/CustomToast";
import { editTodo } from "../redux/addSlice";

interface EditFormType {
  id: number;
  closeEditForm: ()=>void
}

export default function EditForm(props: EditFormType) {
   const [task, setTask] = useState("");
   const [priority, setPriority] = useState("");
   const [toastHandler, setToastHandler] = useState(false);
   const [date, setDate] = useState("");

   const dispatch = useDispatch();

   const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
       if (task === "") {
         setToastHandler(true);
         return;
       }
       if (priority === "") {
         setToastHandler(true);
         return;
       }
       dispatch(editTodo({ id: props.id, task: task, priority: priority }));
       props.closeEditForm();
   };
    const ToastHandler = () => {
      setToastHandler(false);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value);
    };
  return (
    <div className="overlay-container">
      {toastHandler && <CustomToast ToastHandler={ToastHandler} />}
      <div className="form-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-x-lg overlay-close-btn"
          viewBox="0 0 16 16"
          onClick={props.closeEditForm}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
        <TaskForm
          task={task}
          onSubmit={submitHandler}
          onChange={(e) => setTask(e.target.value)}
          setPriority={(e) => setPriority(e.target.value)}
          date={date}
          handleDateChange={handleDateChange}
        />
      </div>
    </div>
  );
}
