import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoTask from "./ToDoTask";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <>
      <h2>ToDo</h2>

      <ToDoForm onAddTask={addTask} />

      <ul className="todo__list">
        {tasks.map((task, index) => (
          <ToDoTask key={index} task={task} />
        ))}
      </ul>
    </>
  );
}
