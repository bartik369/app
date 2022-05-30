import React, { useState } from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from "axios";
import ENV from "../../env.config";
import "./Todos.css";
import Modal from "../UI/modal/Modal";

const Todos = ({ 
  todos, 
  setTodos, 
  newTodoHandler, 
  modalActive, 
  setModalActive, 
  popup}) => {
  
  const createToDo = (todoData) => {

    const { todotitle, tododescription, todoAddTime } = todoData;
    Axios.post(`${ENV.HOSTNAME}newtodo`, {
      todoTitle: todotitle,
      todoDescription: tododescription,
      todoAddTime: todoAddTime,
    });
  };

  const deleteTodoHandler = (id) => {
    Axios.delete(`${ENV.HOSTNAME}todo/${id}`).then((response) => {
      const indexOfDelitedItem = todos.filter((item) => item._id !== response.data.id);
      setTodos(indexOfDelitedItem);
    });
  }

  return (
    <div className="todos">
        <div className="add-todo">
          <button 
          className="add-todo-btn"
          onClick={() => newTodoHandler()}
          >Новая задача</button>
        
        <Modal visible={modalActive} setVisible={setModalActive}>
          <AddTodoForm create={createToDo} popup={popup}/>
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
                      onClick={() => console.log('dds')}
                      className="todoupdate-btn"
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </li>
                  <li className="todo-btns__item" title="Обновить">
                    <button
                      onClick={() => deleteTodoHandler(todo._id)}
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
