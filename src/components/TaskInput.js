import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      addTask(newTask.trim());
      setNewTask("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3 align-items-center justify-content-between rounded-pill">
        <Form.Control
          placeholder="Add Your Task"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          className="bg-transparent rounded-pill"
        />
        <Button type="submit" className="rounded-pill">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TaskInput;
