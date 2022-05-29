import React, { useState } from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from "axios";
import ENV from "../../env.config";
import "./Todos.css";
import Modal from "../UI/modal/Modal";

const Todos = ({ todos }) => {
  const createToDo = (todoData) => {
    const { todotitle, tododescription, todoAddTime } = todoData;

    Axios.post(`${ENV.HOSTNAME}newtodo`, {
      todoTitle: todotitle,
      todoDescription: tododescription,
      todoAddTime: todoAddTime,
    });
  };

  return (
    <div className="todos">
        <div className="add-todo">
          <button 
          className="add-todo-btn"
          onClick={() => console.log('add todo')}
          >Новая задача</button>
        <Modal>
          <AddTodoForm create={createToDo} />
        </Modal>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <div className="todo-item" key={index}>
              <div className="todo-item__title">{todo.todoTitle}</div>
              <div className="todo-item__description">
                {todo.todoDescription}
              </div>
              <hr className="separate"/>
              <div className="time-info">
                <div className="todo-item__addtime">{todo.todoAddTime}</div>
                <div className="todo-item__deadline">5/28/2022 22:39:12</div>
              </div>
              <div className="todo-btns">
                <ul className="todo-btns__inner">
                  <li className="todo-btns__item">
                    <button
                      onClick={() => console.log("end")}
                      className="todoend-btn"
                    >
                      <i className="bi bi-check2-square" title="Завершить"></i>
                    </button>
                  </li>
                  <li className="todo-btns__item">
                    <button
                      onClick={() => console.log("update")}
                      className="todoupdate-btn"
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </li>
                  <li className="todo-btns__item" title="Обновить">
                    <button
                      onClick={() => console.log("delete")}
                      className="tododel-btn"
                    >
                      <i className="bi bi-trash3" title="Удалить"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
