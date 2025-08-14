import React, { useReducer, useState } from "react";
import "../styles/ToDoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const iniTODO = [];

const reducefun = (state, action) => {
  switch (action.type) {
    case "Add_Todo":
      if (!action.payload.text.trim()) return state;
      return [...state, action.payload];
    case "Remove_Todo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const ToDoList = () => {
  const [todos, dispatch] = useReducer(reducefun, iniTODO);
  const [todoText, settodoText] = useState("");
  const handleAdd = () => {
    dispatch({ type: "Add_Todo", payload: { id: Date.now(), text: todoText } });
    settodoText("");
  };
  return (
    <main className="todo-container">
      <div className="input">
        <input
          type="text"
          placeholder="Add Todo"
          value={todoText}
          onChange={(e) => settodoText(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="todo-list">
        <ul>
          
            {todos.map((todo) => (
              <li key={todo.id}>
                <h3>{todo.text}</h3>
                <button
                  onClick={() =>
                    dispatch({ type: "Remove_Todo", payload: todo.id })
                  }
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          
        </ul>
      </div>
    </main>
  );
};

export default ToDoList;