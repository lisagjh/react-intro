import { useState } from "react";

export default function ToDoForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValue);
    setInputValue(""); // reset input field
  };

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <label htmlFor="new-todo" className="visually-hidden">
        New task
      </label>
      <input
        type="text"
        id="new-todo"
        name="new-todo"
        placeholder="Add new task"
        className="todo__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit" className="todo__button__submit">
        +
      </button>
    </form>
  );
}
