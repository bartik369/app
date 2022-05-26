import React, {useState} from "react";
import FormInput from "./FormInput";

const AddTodoForm = ({create}) => {
    const [todo, setTodo] = useState([
        {
            id: "",
            todoTitle: "",
            todoDescription: "",
            todoAddTime: "",
        }
    ]);


    const addTodoInfo = (e) => {
        setTodo(e.target.value)
    }

    const addTodoHandler = () => {
        const date = new Date();
        const todoTime =
          date.toLocaleDateString() + " " + date.toLocaleTimeString("ru-RU");
          const newTodo = {
              ...todo,
              id: Date.now(),
              todoAddTime: todoTime,
          }
          create(newTodo);
    }

    return (
        <div>
            <FormInput
            placeholder="Название задачи"
            value={todo.todoTitle}
            onChange={(e) => addTodoInfo(e)}
            />
            <textarea 
            name="" 
            id="todo-description" 
            placeholder="Описание"
            value={todo.todoDescription}
            onChange={(e) => addTodoInfo(e)}
            />

            <button className="add-btn" onClick={() => addTodoHandler()}>Добавить</button>
        </div>

    )
};


export default AddTodoForm;