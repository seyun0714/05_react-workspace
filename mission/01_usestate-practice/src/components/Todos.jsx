import React from "react";
import { useState } from "react";

function Todos() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleClickAdd = () => {
    setTodos((prev) => [...prev, { title: todoInput, checked: false }]);
    setTodoInput("");
  };

  const handleClickDelete = (key) => {
    setTodos((prev) => prev.filter((_, idx) => idx !== key));
  };

  const handleChangeCheckbox = (key) => {
    setTodos((prev) =>
      prev.map((todo, idx) => {
        if (idx === key) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={todoInput}
          placeholder="할일을 입력하세요"
          onChange={(e) => handleChangeInput(e)}
        />
        <button onClick={handleClickAdd}>추가</button>
      </div>
      {todos.map((todo, idx) => (
        <div key={idx}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleChangeCheckbox(idx)}
          />
          <span style={todo.checked ? { textDecoration: "line-through" } : {}}>
            {todo.title}
          </span>
          <button onClick={() => handleClickDelete(idx)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
