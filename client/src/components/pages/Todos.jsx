import React, { useState } from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from "axios";
import ENV from "../../env.config";

const Todos = () => {
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
    </div>
  );
};

export default Todos;
