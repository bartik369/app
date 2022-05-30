import React, { useState } from "react";
import FormInput from "./FormInput";

const AddTodoForm = ({ create, modal }) => {
  const [todo, setTodo] = useState([]);

  const addTodoInfo = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodoHandler = () => {
    const date = new Date();
    const todoTime =
      date.toLocaleDateString() + " " + date.toLocaleTimeString("ru-RU");
    const newTodo = {
      ...todo,
      id: Date.now(),
      todoAddTime: todoTime,
    };
    create(newTodo);
    const popOut = () => {
      modal(false)
    }
    setTimeout(popOut, 1000);
  };

  return (
    <div className="add-todo-form">
      <FormInput
        placeholder="Название задачи"
        value={todo.todoTitle}
        name="todotitle"
        onChange={(e) => addTodoInfo(e)}
      />
      <textarea
        value={todo.todoDescription}
        name="tododescription"
        onChange={(e) => addTodoInfo(e)}
        cols="20"
        rows="10"
      />
      <button className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
