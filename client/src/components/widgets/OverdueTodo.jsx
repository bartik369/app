import React from "react";
import "../widgets/widgets.css";

const OverdueTodo = ({todos}) => {
    const arrayTodos = [...todos]
    const dateNow = new Date().toLocaleString('ru-RU')
    
    return (
        <div className="widget-item">
          <div className="widget-item__title">Срочно выполнить</div>
          <div className="todos_info">
            {arrayTodos.map((todo, index) => (
                      todo.endTime <= dateNow
                      ?
                      <div className="overdue__item">
                        <div className="todos_info__title">{todo.title}</div>
                        <div className="todos_info__endtime">{todo.endTime}</div>
                        <div className="todos_info__btns">
                            <button className="todos_info__btn">
                                <i className="bi bi-check2-square" title="Завершить"></i>
                            </button>
                            <button className="todos_info__btn">
                                <i className="bi bi-arrow-clockwise" title="Обновить"></i>
                            </button>
                            <button className="todos_info__btn">
                                <i className="bi bi-trash3" title="Удалить"></i>
                            </button>
                        </div>
                      </div>
                      : ""
                  ))}
          </div>
          <div className="separat"></div>
          <div className="widget-item__title">Обратить внимание</div>
          <div className="todos_info">
            {arrayTodos.map((todo, index) => (
                      todo.endTime <= dateNow
                      ?
                      <div className="expire-soon__item">
                        <div className="todos_info__title">{todo.title}</div>
                        <div className="todos_info__endtime">{todo.endTime}</div>
                        <div className="todos_info__btns">
                        <button className="todos_info__btn">
                            <i className="bi bi-check2-square" title="Завершить"></i>
                            </button>
                            <button className="todos_info__btn">
                            <i className="bi bi-arrow-clockwise" title="Обновить"></i>
                            </button>
                            <button className="todos_info__btn">
                            <i className="bi bi-trash3" title="Удалить"></i>
                            </button>
                        </div>
                      </div>
                      : ""
                  ))}
          </div>
        </div>
    )
}

export default OverdueTodo;