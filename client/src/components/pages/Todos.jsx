import React, {useState} from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from 'axios';
import ENV from "../../env.config";

const Todos = () => {
    const createToDo = (todoData) => {

       const { todoTitle, todoDescription, todoAddTime } = todoData;

       Axios.post('http://localhost:5001/insert', {
        todoTitle: todoTitle,
        todoDescription: todoDescription,
        todoAddTime: todoAddTime,
       });
    };

    return (
        <div className="tasks">
           <AddTodoForm create={createToDo} />
        </div>
    )
}

export default Todos;