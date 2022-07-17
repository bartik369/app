import React from "react";
import "../widgets/widgets.css";
import { Link } from "react-router-dom";

const OverdueTodo = ({todos}) => {
    const arrayTodos = [...todos]
    const dateNow = new Date().toLocaleString('ru-RU')
    
    return (
        <div className="widget-item">
          <div className="wrapper-title">
          <div className="icon-title-danger"><i className="bi bi-alarm"></i></div>
          <div className="widget-item__title">Срочно выполнить</div>
          </div>
          <div className="todos_info">
            {arrayTodos.map((todo, index) => (
                      todo.endTime <= dateNow
                      ?
                      <div className="overdue__item">
                        <div className="todos_info__title">{todo.title}</div>
                        <span className="time-text">Закончить до:</span>
                        <div className="todos_info__endtime">{todo.endTime}</div>
                      </div>
                      : ""
                  ))}
          </div>
          <div className="widget-separate"></div>
          <div className="wrapper-title">
          <div className="icon-title-attention"><i className="bi bi-exclamation-circle"></i></div>
          <div className="widget-item__title">Обратить внимание</div>
          </div>
          <div className="todos_info">
            {arrayTodos.map((todo, index) => (
                      todo.endTime <= dateNow
                      ?
                      <div className="expire-soon__item">
                        <div className="todos_info__title">{todo.title}</div>
                        <span className="time-text">Закончить до:</span>
                        <div className="todos_info__endtime">{todo.endTime}</div>
                      </div>
                      : ""
                  ))}
          </div>
          <div className="button-wrap">
            <Link to="/todos">
              <button className="read-more">Перейти к задачам</button>
            </Link>
          </div>
        </div>
    )
}

export default OverdueTodo;