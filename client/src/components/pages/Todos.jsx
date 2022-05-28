import React, { useState } from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from "axios";
import ENV from "../../env.config";

const Todos = ({todos}) => {
  const createToDo = (todoData) => {
    const { todotitle, tododescription, todoAddTime } = todoData;

    Axios.post(`${ENV.HOSTNAME}newtodo`, {
      todoTitle: todotitle,
      todoDescription: tododescription,
      todoAddTime: todoAddTime,
    });
  };

  return (
    <div className="tasks">
      <AddTodoForm create={createToDo} />
      <div>
      {todos.map((todo, index) => {
          return (
            <div className="todo-list" key={index}>
            <div>{todo.todoTitle}</div>
            <div>{todo.todoDescription}</div>
            <div>{todo.todoAddTime}</div>
          </div>
          )
      })}
      </div>
    </div>
  );
};

export default Todos;
