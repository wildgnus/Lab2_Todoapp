import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  editTodo,
  removeTodo,
  toggleComplete,
  toggleFavorite,
}) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default TodoList;
