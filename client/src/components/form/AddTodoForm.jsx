import React, { useState } from "react";
import FormInput from "./FormInput";

const AddTodoForm = ({ create, modal }) => {
  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    const date = new Date();
    const todoTime = date.toLocaleDateString() + " " + date.toLocaleTimeString("ru-RU");
     const newTodo = {
      ...todo,
      id: Date.now(),
      todoStatus: "inprocess",
      todoAddTime: todoTime,
    };
    // const date = new Date();
    // const todoTime = date.toLocaleDateString() + " " + date.toLocaleTimeString("ru-RU");

    // const newTodo = {
    //   id: Date.now(),
    //   todoTitle: todo.todoTitle,
    //   todoDescription: todo.todoDescription,
    //   todoStatus: "inprocess",
    //   todoAddTime: todoTime,
    // };
    setTodo(newTodo)
    create(todo);
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
