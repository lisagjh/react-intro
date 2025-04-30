export default function ToDoTask({ task, onRemove, completed }) {
  return (
    <li
      className={`todo__task ${
        completed ? "todo__task__completed" : "todo__task"
      }`}
    >
      {task}
      <div className="buttons">
        <button className="todo__task__button" onClick={onRemove}>
          x
        </button>
      </div>
    </li>
  );
}
