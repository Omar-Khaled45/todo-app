import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, deleteTask, toggleEdit, toggleComplete }) => {
  return (
    <>
      <div className={task.completed ? "task completed" : "task"} key={task.id}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="checkbox-wrapper me-3">
              <input
                type="checkbox"
                onClick={() => toggleComplete(task.id)}
                defaultChecked={task.completed}
              />
              <svg viewBox="0 0 35.6 35.6">
                <circle
                  r="17.8"
                  cy="17.8"
                  cx="17.8"
                  className="background"
                ></circle>
                <circle
                  r="14.37"
                  cy="17.8"
                  cx="17.8"
                  className="stroke"
                ></circle>
                <polyline
                  points="11.78 18.12 15.55 22.23 25.17 12.87"
                  className="check"
                ></polyline>
              </svg>
            </div>
            <div>
              <p className="mb-1 fw-semibold">
                {task.taskName[0].toUpperCase() + task.taskName.substr(1)}
              </p>
              <p className="time mb-0">{task.taskTime}</p>
            </div>
          </div>
          <div className="task-control">
            <FontAwesomeIcon
              icon={faPencil}
              className="edit"
              size="lg"
              onClick={() => toggleEdit(task.id)}
            />
            <FontAwesomeIcon
              className="ms-3 delete"
              icon={faXmark}
              size="lg"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
