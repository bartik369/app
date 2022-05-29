import React, { useState } from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from "axios";
import ENV from "../../env.config";
import './Todos.css'
import Modal from "../UI/modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";


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
    <div className="todos">
      <div className="todo-list">
      {todos.map((todo, index) => {
          return (
            <div className="todo-item" key={index}>
            <div className="todo-item__title">{todo.todoTitle}</div>
            <div className="todo-item__description">{todo.todoDescription}</div>
            <div className="todo-item__addtime">{todo.todoAddTime}</div>
            <div className="todo-btns">
              <ul className="todo-btns__inner">
                <li className="todo-btns__item">
                  <button onClick={() => console.log('end')} className="todoend-btn">
                  <FontAwesomeIcon icon={faSquareCheck} />
                  </button>
                </li>
                <li className="todo-btns__item">
                  <button onClick={() => console.log('update')} className="todoupdate-btn">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </li>
                <li className="todo-btns__item">
                  <button onClick={() => console.log('delete')} className="tododel-btn">
                  <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          )
      })}
      </div>
      <div className="add-todo">
      <Modal>
      <AddTodoForm create={createToDo} />
      </Modal>
      </div>
    </div>
  );
};

export default Todos;
