import React from "react";
import "../widgets/widgets.css";

const OverdueTodo = ({todos}) => {
    const arrayTodos = [...todos]
    const dateNow = new Date().toLocaleString('ru-RU')
    
    return (
        <div className="widget-item">
          <div className="widget-item__title">Срочно выполнить</div>
          <table className="widget-table">
              <thead>
                  <tr>
                      <th>Название</th>
                      <th>Начать</th>
                      <th>Закончить</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {arrayTodos.map((todo, index) => (
                      todo.endTime <= dateNow
                      ?
                      <tr key={index}>
                          <td>{todo.title}</td>
                          <td>{todo.startTime}</td>
                          <td>{todo.endTime}</td>
                          <td>
                            <button>
                            <i className="bi bi-check2-square" title="Завершить"></i>
                            </button>
                            <button>
                            <i className="bi bi-arrow-clockwise" title="Обновить"></i>
                            </button>
                            <button>
                            <i className="bi bi-trash3" title="Удалить"></i>
                            </button>
                          </td>
                      </tr>
                      : ""
                  ))}
              </tbody>
          </table>
        </div>
    )
}

export default OverdueTodo;