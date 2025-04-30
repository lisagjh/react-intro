import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoTask from "./ToDoTask";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
  };

  function finishTask(indexToRemove) {
    // Get the task to move to finishedTasks
    const taskToFinish = tasks[indexToRemove];

    // Remove the task from tasks
    const updatedTasks = tasks.filter((task, index) => index !== indexToRemove);

    // Add the task to finishedTasks
    setFinishedTasks([...finishedTasks, taskToFinish]);

    // Update the tasks state
    setTasks(updatedTasks);
  }

  return (
    <>
      <h2>ToDo</h2>

      <ToDoForm onAddTask={addTask} />

      <h3>Pending Tasks</h3>
      <ul className="todo__list">
        {tasks.map((task, index) => (
          <ToDoTask
            key={index}
            task={task}
            onRemove={() => finishTask(index)}
          />
        ))}
      </ul>

      <h3>Finished Tasks</h3>
      <ul className="todo__list">
        {finishedTasks.map((task, index) => (
          <ToDoTask
            key={index}
            task={task}
            completed={true}
            onRemove={() => finishTask(index)}
          />
        ))}
      </ul>
    </>
  );
}
