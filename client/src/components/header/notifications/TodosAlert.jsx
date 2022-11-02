import React from 'react';
import {Link} from "react-router-dom";


export default function TodosAlert() {
    
    return (
        <div className="todo-alert">
            <ul className="todo-alert__items">
                <li className="todo-alert__item">
                    <Link className="todo-alert__link" to="">
                        
                    </Link>
                </li>
            </ul>
        </div>
    )
}