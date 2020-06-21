import React from "react";
import "./Todo.css";
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button className="check-mark" onClick={() => completeTodo(index)}>
          <span role="img" aria-label="check">
            ✔️
          </span>
        </button>
        <button className="delete-mark" onClick={() => removeTodo(index)}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </button>
      </div>
    </div>
  );
}
export default Todo;
