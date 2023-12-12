import { useState } from "react";
import TaskInput from "./TaskInput";
import Task from "./Task";
import Swal from "sweetalert2";
import EditForm from "./EditForm";
import DarkMode from "./DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const TaskWrapper = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const addToLocalStorage = () => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  const createTask = (newTask) => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: newTask,
      completed: false,
      editing: false,
      taskTime: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        month: "numeric",
        day: "numeric",
        year: "numeric",
      }),
    };
    setList([...list, task]);
  };

  const addTask = (newTask) => {
    if (list.some((e) => e.taskName.toLowerCase() === newTask.toLowerCase())) {
      Swal.fire({
        icon: "warning",
        title: "This task is in your list.",
        showCancelButton: true,
        allowOutsideClick: true,
        confirmButtonText: "Add Anyway",
        background: "var(--wrapper-bg-color)",
        color: "var(--text-color)",
      }).then((res) => {
        if (res.isConfirmed) {
          createTask(newTask);
        }
      });
    } else {
      createTask(newTask);
    }

    // Add Tasks to Local Storage
    addToLocalStorage();
  };

  const deleteTask = (id) => {
    Swal.fire({
      icon: "question",
      title: "Are You Sure You Want To Delete This Task?",
      showCancelButton: true,
      allowOutsideClick: true,
      background: "var(--wrapper-bg-color)",
      color: "var(--text-color)",
    }).then((res) => {
      if (res.isConfirmed) {
        setList(list.filter((task) => task.id !== id));
      }
    });

    // Add Tasks to Local Storage
    addToLocalStorage();
  };

  const toggleComplete = (id) => {
    setList(
      list.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const toggleEdit = (id) => {
    setList(
      list.map((task) => {
        return task.id === id ? { ...task, editing: !task.editing } : task;
      })
    );
  };

  const editTask = (task, id) => {
    setList(
      list.map((e) => {
        return e.id === id ? { ...e, taskName: task, editing: !e.editing } : e;
      })
    );
  };

  const clearList = () => {
    Swal.fire({
      icon: "question",
      title: "Are You Sure You Want To Delete All Tasks?",
      showCancelButton: true,
      allowOutsideClick: true,
      background: "var(--wrapper-bg-color)",
      color: "var(--text-color)",
    }).then((res) => {
      if (res.isConfirmed) {
        setList([]);
      }
    });
  };

  // Add Tasks to Local Storage
  addToLocalStorage();

  return (
    <div className="todo-wrapper mt-5">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h1>To-Do List</h1>
          {list.length > 1 && (
            <div role="button" className="clear ms-3" onClick={clearList}>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          )}
        </div>
        <DarkMode />
      </div>
      <TaskInput addTask={addTask} />
      <div className="todo-list mt-5">
        {list &&
          list.map((task) => {
            return task.editing ? (
              <EditForm key={task.id} task={task} editTask={editTask} />
            ) : (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                toggleEdit={toggleEdit}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TaskWrapper;
