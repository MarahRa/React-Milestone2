import React, { useState } from "react";

import "./App.css";
import { Todo, TodoForm, Header, Instructions } from "./component";

function App() {
  const [todos, setTodos] = useState([
    { text: "Clean my room", isCompleted: false },
    { text: "Read a new book", isCompleted: false },
    { text: "Learn React", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />
      <Instructions />
      <div className="add-input">
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
