import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PrioritySelect from './PrioritySelect';

interface TaskFormType {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPriority: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  task: string;
}

export default function TaskForm(props: TaskFormType) {
  return (
    <Form
      onSubmit={props.onSubmit}
      style={{ width: "500px", background: 'white' }}
      className="container border p-0.5 rounded mt-4 mb-5 d-flex justify-content-center align-items-center "
    >
      <Form.Group className="m-3">
        <Form.Control
          type="text"
          placeholder="Enter Task"
          onChange={props.onChange}
          value={props.task}
        />
      </Form.Group>
      <PrioritySelect setPriority={props.setPriority} />
      <Button variant="primary" className="m-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}
