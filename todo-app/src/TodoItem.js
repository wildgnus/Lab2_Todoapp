import React, { useState } from "react";

const TodoItem = ({
  todo,
  editTodo,
  removeTodo,
  toggleComplete,
  toggleFavorite,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""} ${
        todo.favorite ? "favorite" : ""
      }`}
    >
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <div className="todo-content" onClick={() => toggleComplete(todo.id)}>
            <span>{todo.text}</span>
          </div>
          <div className="todo-actions">
            <button
              className={`star ${todo.favorite ? "favorite" : ""}`}
              onClick={() => toggleFavorite(todo.id)}
            >
              ★
            </button>
            <button className="edit" onClick={() => setIsEditing(true)}>
              ✎
            </button>
            <button className="delete" onClick={() => removeTodo(todo.id)}>
              ✖
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
