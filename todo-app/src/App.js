import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const savedTheme = localStorage.getItem("theme") || "light";
    setTodos(savedTodos);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("theme", theme);
  }, [todos, theme]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false, favorite: false },
      ]);
      setNewTodo("");
    }
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleFavorite = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, favorite: !todo.favorite } : todo
      )
    );
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const sortedTodos = [...todos].sort((a, b) => b.favorite - a.favorite);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>ToDo App</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </button>
      </header>
      <main className="app-main">
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <TodoList
          todos={sortedTodos}
          editTodo={editTodo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
};

export default App;
