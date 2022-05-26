import React from "react";
import AddTodoForm from "../form/AddTodoForm";
import Axios from 'axios';
import ENV from "../../env.config";

const Todos = () => {


    const createToDo = (todoData) => {

       const {todoTitle, todoDescription, todoAddTime} = todoData;
       console.log(todoData)

       Axios.post(`${ENV.HOSTNAME}newtodo/`, {
        todoTitle: todoTitle,
        todoDescription: todoDescription,
        todoAddTime: todoAddTime,
       })
       
    }
    return (
        <div className="tasks">
           <AddTodoForm create={createToDo} />
        </div>
    )
}

export default Todos;