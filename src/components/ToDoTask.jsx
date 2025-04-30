export default function ToDoTask({ task, onRemove, completed }) {
  return (
    <li className={`todo__task ${completed ? "todo__task__completed" : ""}`}>
      {task}
      <div className="buttons">
        {!completed && (
          <button className="todo__task__button" onClick={onRemove}>
            x
          </button>
        )}
        {completed && <span>✓</span>}
      </div>
    </li>
  );
}
