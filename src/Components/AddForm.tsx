import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/addSlice";
import CustomToast from "../Atoms/CustomToast";
import TaskForm from "../Atoms/TaskForm";

function AddForm() {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const [toastHandler, setToastHandler] = useState(false);
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState('');

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (task === "") {
        setToastHandler(true);
        return;
      }
      if (priority === "") {
        setToastHandler(true);
        return;
      }
      const id = Math.random();
      dispatch(addTodo({ id: id, task: task, priority: priority, date: date }));
      setTask("");
      setDate('');
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value);
    };

    const ToastHandler = () => {
      setToastHandler(false);
    }
  return (
    <>
      {toastHandler && <CustomToast ToastHandler={ToastHandler} />}
      <TaskForm
        task={task}
        onSubmit={addTask}
        onChange={(e) => setTask(e.target.value)}
        setPriority={(e) => setPriority(e.target.value)}
        date={date}
        handleDateChange={handleDateChange}
      />
    </>
  );
}

export default AddForm;
