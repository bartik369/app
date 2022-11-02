import React from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';

export default function TodosAlert({over}) {

    console.log(over)

    return (

        <div className="todo-alert">
        <ul className="todo-alert__items">
            {over.map((item, index) => (
               <li className="todo-alert__item">
                   <Link className="todo-alert__link" to="" key={index}>
                      {item.title}
                      <p></p>
                      {moment(item.endTime).format("DD.MM.YYYY HH:mm")}
                    </Link>
                 </li>
            ))}
        </ul>
        </div>
    );
}



