import React, { useState } from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from "axios";
import ENV from "../../env.config";
import "./Todos.css";
import Modal from "../UI/modal/Modal";
import UpdateTodoForm from "../form/UpdateTodoForm";

const Todos = ({
  todos,
  setTodos,
  newTodoHandler,
  modalActive,
  setModalActive,
  updateModalActive,
  setUpdateModalActive,
  modal,
}) => {
  const [updateTodoId, setUpdateTodoId] = useState("");
  const [todoDone, setTodoDone] = useState(false);

  const createToDo = (todoData) => {
    const { title, description, addTime, status } = todoData;

    Axios.post(`${ENV.HOSTNAME}newtodo`, {
      title: title,
      description: description,
      status: status,
      addTime: addTime,
    });
  };

  const handleTodoDelete = (id) => {
    Axios.delete(`${ENV.HOSTNAME}todo/${id}`).then((response) => {
      const indexOfDelitedItem = todos.filter(
        (item) => item._id !== response.data.id
      );

      setTodos(indexOfDelitedItem);
    });
  };

  const handleTodoUpdate = (id) => {
    setUpdateModalActive(true);

    Axios.get(`${ENV.HOSTNAME}todo/${id}`).then((response) => {
      setUpdateTodoId(response.data[0]);
    });
  };

  const updateTodo = (updateTodoData) => {
    console.log(updateTodoData);

    const { id, title, description, status, addTime } = updateTodoData;
    Axios.put(`${ENV.HOSTNAME}todo/${id}`, {
      id: id,
      title: title,
      description: description,
      status: status,
      addTime: addTime,
    }).then((response) => {
      const indexOfChangedItem = todos.findIndex(
        (item) => item._id === response.data.id
      );
      const newArray = [...todos];
      newArray[indexOfChangedItem] = response.data;
      setTodos(newArray);
      console.log(newArray);

      const popOut = () => setUpdateModalActive(false);
      setInterval(popOut, 1000);
    });
  };

  const handleTodoComplete = (id) => {
    const indexOfDone = todos.find((item) => item._id === id);
    indexOfDone.status = "done";
    const { _id, title, description, addTime, status } = indexOfDone;
    Axios.put(`${ENV.HOSTNAME}todo/${_id}`, {
      id: _id,
      title: title,
      description: description,
      status: status,
      addTime: addTime,
    }).then((response) => {
      console.log(response.data);
      const newArray = [...todos];
      newArray[indexOfDone] = response.data;
      setTodos(newArray);
    });
  };

  console.log(todos);

  return (
    <div className="todos">
      <Modal visible={modalActive} setVisible={setModalActive}>
        <AddTodoForm create={createToDo} modal={modal} />
      </Modal>
      <Modal visible={updateModalActive} setVisible={setUpdateModalActive}>
        <UpdateTodoForm updateTodoId={updateTodoId} updateTodo={updateTodo} />
      </Modal>
      <div className="add-todo">
        <button className="add-todo-btn" onClick={() => newTodoHandler()}>
          Новая задача
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <div
              className={`todo-item ${todo.status === "done" ? "done" : ""}`}
              key={index}
            >
              <div className="todo-item__title">{todo.title}</div>
              <div className="todo-item__description">{todo.description}</div>
              <hr className="separate" />
              <div className="time-info">
                <div className="todo-item__addtime">{todo.addTime}</div>
                <div className="todo-item__deadline">5/28/2022 22:39:12</div>
              </div>
              <div className="todo-btns">
                <ul className="todo-btns__inner">
                  <li className="todo-btns__item">
                    <button
                      onClick={() => handleTodoComplete(todo._id)}
                      className={`todoend-btn ${todo.status === "done" ? "delete" : ""}`}
                    >
                      <i className="bi bi-check2-square" title="Завершить"></i>
                    </button>
                  </li>
                  <li className="todo-btns__item">
                    <button
                      onClick={() => handleTodoUpdate(todo._id)}
                      className={`todoupdate-btn ${todo.status === "done" ? "delete" : ""}`}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </li>
                  <li className="todo-btns__item" title="Обновить">
                    <button
                      onClick={() => handleTodoDelete(todo._id)}
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
