import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoViewButton from "./ToDoViewButton";
import ToDoView from "./ToDoView";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [view, setView] = useState("all");

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
  };

  const finishTask = (index) => {
    const task = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setFinishedTasks([...finishedTasks, task]);
  };

  return (
    <div className="todo">
      <ToDoForm onAddTask={addTask} />
      <ToDoViewButton
        view={view}
        setView={setView}
        tasks={tasks}
        finishedTasks={finishedTasks}
      />
      <ToDoView
        view={view}
        tasks={tasks}
        finishedTasks={finishedTasks}
        onFinish={finishTask}
      />
    </div>
  );
}
