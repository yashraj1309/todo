import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/addSlice";
import CustomToast from "../Atoms/CustomToast";

function AddForm() {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const [toastHandler, setToastHandler] = useState(false);
    const [priority, setPriority] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if(task==="") {
            setToastHandler(true);
            return;
        }
        if(priority==="") {
          setToastHandler(true);
          return;
        }
        const id = Math.random();
        dispatch(addTodo({id: id,task: task, priority: priority}));
        setTask('');
    }

    const ToastHandler = () => {
      setToastHandler(false);
    }
  return (
    <>
      {toastHandler && <CustomToast ToastHandler={ToastHandler} />}
      <Form
        onSubmit={addTask}
        style={{ width: "500px" }}
        className="container border p-0.5 rounded mt-4 mb-5 d-flex justify-content-center align-items-center "
      >
        <Form.Group className="m-3">
          <Form.Control
            type="text"
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </Form.Group>
        <Form.Select className="m-3" style={{ width: "fit-content" }} onChange={(e)=> setPriority(e.target.value)}>
          <option value="0">Priority</option>
          <option value="1" style={{ color: "green" }}>
            Low
          </option>
          <option value="2" style={{ color: "orange" }}>
            Medium
          </option>
          <option value="3" style={{ color: "red" }}>
            High
          </option>
        </Form.Select>
        <Button variant="primary" className="m-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddForm;
