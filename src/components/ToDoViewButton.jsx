export default function ToDoViewButtons({
  view,
  setView,
  tasks,
  finishedTasks,
}) {
  return (
    <div className="todo__view">
      <button
        className={`todo__view__button ${view === "all" ? "active" : ""}`}
        onClick={() => setView("all")}
      >
        All
        {tasks.length + finishedTasks.length >= 1 && (
          <span>{tasks.length + finishedTasks.length}</span>
        )}
      </button>

      <button
        className={`todo__view__button ${view === "todo" ? "active" : ""}`}
        onClick={() => setView("todo")}
      >
        To Do
        {tasks.length >= 1 && <span>{tasks.length}</span>}
      </button>

      <button
        className={`todo__view__button ${view === "completed" ? "active" : ""}`}
        onClick={() => setView("completed")}
      >
        Completed
        {finishedTasks.length >= 1 && <span>{finishedTasks.length}</span>}
      </button>
    </div>
  );
}
