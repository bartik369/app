import React from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';

export default function TodosAlert({overTodos}) {

    return (
      <div className="todo-alert">
        <ul className="todo-alert__items">
          {overTodos.map((todo, index) => (
            <li className="todo-alert__item">
              <Link className="todo-alert__link" to="" key={index}>
                {todo.title}
                <p></p>
                {moment(todo.endTime).format("DD.MM.YYYY HH:mm")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}



