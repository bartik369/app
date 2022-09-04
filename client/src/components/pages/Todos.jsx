import React, { useState, useEffect } from "react";
import AddTodoForm from "../form/AddTodoForm";
import "./Todos.css";
import "../../styles/App.css"
import Modal from "../UI/modal/Modal";
import UpdateTodoForm from "../form/UpdateTodoForm";
import Masonry from 'react-masonry-css';
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getSingleTodo, loadTodos, updateTodo, addTodo } from "../../store/actions/todosActions";

const Todos = () => {

  const [deleteId, setDeleteId] = useState();
  const [visibleModal, setVisibleModal] = useState(false)

  let dispatch = useDispatch()
  const {todos} = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(loadTodos())
  }, []);

  const newTodoHandler = () => {
    setVisibleModal(true)
  }


  const createTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  }


  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id));
    setDeleteId(id);
  };

  const handleTodoUpdate = (id) => {
    dispatch(getSingleTodo(id))
  };

  const updateTodoData = (updatedData) => {
    dispatch(updateTodo(updatedData, updatedData.id))
  };

  const handleTodoComplete = (id) => {
    const indexOfDoneItem = todos.find((item) => item._id === id);
    indexOfDoneItem.status = "done";
    dispatch(updateTodo(indexOfDoneItem, indexOfDoneItem._id));
  };

  const handleTodoReopen = (id) => {
    const indexOfReopenItem = todos.find((item) => item._id === id);
    indexOfReopenItem.status = "inprocess";
    dispatch(updateTodo(indexOfReopenItem, indexOfReopenItem._id));

  }
  const dateNow = Date.now();
  const breakpoints = {
    2560: 8,
    1920: 6,
    1800: 5,
    1600: 5,
    1400: 4,
    1201: 4,
    1100: 3,
    900: 2,
    700: 2,
    500: 1
  };


  console.log("dsdfdsa")
  console.log(todos)

  return (
    <div className="todos">
      <Modal visible={visibleModal}>
        <AddTodoForm create={createTodo}/>
      </Modal>
      <Modal>
        <UpdateTodoForm  update={updateTodoData} />
      </Modal>
      <div className="add-todo">
        <button className="add-todo-btn" onClick={() => newTodoHandler()}>
          Новая задача
        </button>
      </div>
      <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {todos.map((todo, index) => {
          const startTodoDate = moment(todo.startTime).format("DD.MM.YYYY HH:mm");
          const endTodoDate = Date.parse(todo.endTime);

          return (
            <div
            className={`todo-item 
            ${(endTodoDate<= dateNow && todo.status !== "done") ? "overdue" : ""}
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
              <span className="time-text">Начать с:</span>
              <span className="start-time">{startTodoDate}</span>
              <span className="time-text">Закончить до:</span>
              <span className="end-time">{moment(endTodoDate).format("DD.MM.YYYY HH:mm")}</span>
            </div>
            <div className="todo-item__bottom">
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
          </div>
        );
        })}
      </Masonry>
      </div>
  );
};

export default Todos;