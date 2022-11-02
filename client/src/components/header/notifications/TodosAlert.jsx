import React from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';

export default function TodosAlert({todos}) {

    return (
      <div className="todo-alert">
        <ul className="todo-alert__items">
          {todos.map((todo, index) => {
            if (Date.parse(todo.endTime) <= Date.now() && todo.status !== "done") {
              return (
                <li className="todo-alert__item" key={index}>
                  {todo.title}
                  <p></p>
                  {moment(todo.endTime).format("DD.MM.YYYY HH:mm")}
              </li>
              )
            }
          }
          )}
        </ul>
      </div>
    );
}


