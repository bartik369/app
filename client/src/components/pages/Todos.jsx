import React from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from 'axios';
import ENV from "../../env.config";

const Todos = () => {


    const createToDo = (todoData) => {
       const {toDoTitle, toDoDescription, toDoAddTime} = todoData;

       Axios.post(`${ENV.HOSTNAME}newtodo/`, {
        toDoTitle: toDoTitle,
        toDoDescription: toDoDescription,
        toDoAddTime: toDoAddTime,
       })
       
    }
    return (
        <div className="tasks">
           <AddTodoForm create={createToDo} />
        </div>
    )
}

export default Todos;