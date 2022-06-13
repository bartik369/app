import React, { useState, useMemo, useEffect } from "react";
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
  const [deleteId, setDeleteId] = useState();

  const getTodos = () => {
    Axios.get(`${ENV.HOSTNAME}todos`).then((response) => {
      setTodos(response.data);
    });
  };

  useEffect(() => {
    getTodos();
  }, [setTodos]);

  const createToDo = (todoData) => {
    const { id, title, description, addTime, status } = todoData;
    Axios.post(`${ENV.HOSTNAME}newtodo`, {
      id: id,
      title: title,
      description: description,
      status: status,
      addTime: addTime,
    })
    .then((response) => {
     setTodos([...todos, response.data])
    })
  };

  const handleTodoDelete = (id) => {
    Axios.delete(`${ENV.HOSTNAME}todo/${id}`).then((response) => {
      const indexOfDelitedItem = todos.filter(
        (item) => item._id !== response.data.id
      );
      const deleteById = () => {
        setTodos(indexOfDelitedItem);
      }
      setTimeout(deleteById, 700)
      const findItemId = todos.find((itemId) => itemId._id === response.data.id);
      setDeleteId(findItemId._id)
    });
  };

  const handleTodoUpdate = (id) => {
    !updateModalActive ? setUpdateModalActive(true) : setUpdateModalActive(false);
    
    Axios.get(`${ENV.HOSTNAME}todo/${id}`).then((response) => {
      setUpdateTodoId(response.data[0]);
    });
  };

  const updateTodo = (updatedData) => {
    const { id, title, description, status, addTime } = updatedData;

    Axios.put(`${ENV.HOSTNAME}todo/${id}`, {
      id: id,
      title: title,
      description: description,
      status: status,
      addTime: addTime,
    }).then((response) => {
      let indexOfChangedItem = todos.findIndex(
        (item) => item._id === response.data.id
      );
      const newArray = [...todos];
      newArray[indexOfChangedItem] = response.data;
      setTodos(newArray);
      setUpdateModalActive(false);
      getTodos()
    });
  };

  const handleTodoComplete = (id) => {
    const indexOfDoneItem = todos.find((item) => item._id === id);
    indexOfDoneItem.status = "done";
    const { _id, title, description, addTime, status } = indexOfDoneItem;
    Axios.put(`${ENV.HOSTNAME}todo/${_id}`, {
      id: _id,
      title: title,
      description: description,
      status: status,
      addTime: addTime,
    }).then((response) => {
      const newArray = [...todos];
      newArray[indexOfDoneItem] = response.data;
      setTodos(newArray);
    });
  };

  const handleTodoReopen = (id) => {
    const indexOfReopenItem = todos.find((item) => item._id === id);
    indexOfReopenItem.status = "inprocess";
    const {_id, title, description, addTime, status } = indexOfReopenItem;
    Axios.put(`${ENV.HOSTNAME}todo/${_id}`, {
      id: _id,
      title: title,
      description: description,
      status: status,
      addTime: addTime,
    }).then((response) => {
      const newArray = [...todos];
      newArray[indexOfReopenItem] = response.data;
      setTodos(newArray);
    });
  }

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
              className={`todo-item 
              ${todo.status === "done" ? "done" : ""}
              ${deleteId === todo._id ? "delete-animation" : ""}`}
              key={index}
            >
              <div className={`icon-done ${todo.status === "done" ? "completed" : ""}`}>
              <i className="bi bi-check-all"></i>
              </div>
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
                      className="todoend-btn"
                    >
                      <i className="bi bi-check2-square" title="Завершить"></i>
                    </button>
                  </li>
                  <li className="todo-btns__item">
                    <button
                      onClick={() => handleTodoUpdate(todo._id)}
                      className="todoupdate-btn" 
                    >
                      <i className="bi bi-arrow-clockwise"></i>
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
                  <li className="todo-btns__item" title="Переоткрыть">
                    <button
                      onClick={() => handleTodoReopen(todo._id)}
                      className="todoreopen-btn"
                    >
                     <i className="bi bi-arrow-counterclockwise"></i>
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
