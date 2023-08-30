import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const EditForm = ({ task, editTask }) => {
  const [value, setValue] = useState(task.taskName);

  const handleSubmit = (e) => {
    // Prevent Default Action
    e.preventDefault();

    if (value) {
      // Edit Task Function
      editTask(value, task.id);
    }
  };

  return (
    <Form className="edit-form" onSubmit={handleSubmit}>
      <InputGroup className="mb-3 align-items-center justify-content-between rounded-pill">
        <Form.Control
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="bg-transparent rounded-pill"
        />
        <Button type="submit" className="rounded-pill">
          Update
        </Button>
      </InputGroup>
    </Form>
  );
};

export default EditForm;
