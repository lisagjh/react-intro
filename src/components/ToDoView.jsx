import ToDoTask from "./ToDoTask";

export default function ToDoView({ view, tasks, finishedTasks, onFinish }) {
  return (
    <ul className="todo__list">
      {view === "all" && (
        <>
          {tasks.map((task, index) => (
            <ToDoTask
              key={`todo-${index}`}
              task={task}
              completed={false}
              onRemove={() => onFinish(index)}
            />
          ))}
          {finishedTasks.map((task, index) => (
            <ToDoTask
              key={`done-${index}`}
              task={task}
              completed={true}
              onRemove={() => {}}
            />
          ))}
        </>
      )}

      {view === "todo" &&
        tasks.map((task, index) => (
          <ToDoTask
            key={index}
            task={task}
            completed={false}
            onRemove={() => onFinish(index)}
          />
        ))}

      {view === "completed" &&
        finishedTasks.map((task, index) => (
          <ToDoTask
            key={index}
            task={task}
            completed={true}
            onRemove={() => {}}
          />
        ))}
    </ul>
  );
}
