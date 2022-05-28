import React, { useState } from "react";
import FormInput from "./FormInput";

const AddTodoForm = ({ create }) => {
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
  };

  return (
    <div>
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
        cols="30"
        rows="10"
      />
      {/* <FormInput
        placeholder="Описание задачи"
        value={todo.todoDescription}
        name="description"
        onChange={(e) => addTodoInfo(e)}
      /> */}
      <button className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
