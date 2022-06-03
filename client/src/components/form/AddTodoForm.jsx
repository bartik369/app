import React, { useState } from "react";
import FormInput from "./FormInput";

const AddTodoForm = ({ create, modal }) => {
  const [todo, setTodo] = useState(
    {
      id: "",
      todoTitle: "",
      todoDescription: "",
      todoStatus: "",
      todoAddTime: "",
    }
  );

  const addTodoHandler = () => {
    const date = new Date();
    const todoTime = date.toLocaleDateString() + " " + date.toLocaleTimeString("ru-RU");
     const newTodo = {
      todoTitle: todo.todoTitle,
      todoDescription: todo.todoDescription,
      id: Date.now(),
      todoStatus: "inprocess",
      todoAddTime: todoTime,
    };

    create(newTodo);
    console.log(newTodo)

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
        onChange={(e) => setTodo({...todo, todoTitle: e.target.value})}
      />
      <textarea
        value={todo.todoDescription}
        name="tododescription"
        onChange={(e) => setTodo({...todo, todoDescription: e.target.value})}
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
