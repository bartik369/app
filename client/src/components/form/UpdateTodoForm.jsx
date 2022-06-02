import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';
import '../pages/Todos.css'

const UpdateTodoForm = ({updateTodoId, updateTodo}) => {

const [updatedTodo, setUpdatedTodo] = useState({
  id: "",
  todoTitle: "",
  todoDescription: "",
  todoAddTime: "",

});

useEffect(() => {
  setUpdatedTodo(updateTodoId)
}, [updateTodoId])

const handleTodoUpdate = () => {
  const date = new Date();
  const todoTime =
    date.toLocaleDateString() + " " + date.toLocaleTimeString("en-GB");
  const updateTodoData = {
    ...updatedTodo,
    todoAddTime: todoTime,
  }
  updateTodo(updateTodoData)
}

  return (
        <div className="update-todo-form">
            <FormInput
            value={updatedTodo.todoTitle || ""}
            name="todotitle"
            onChange={(e) => setUpdatedTodo({...updatedTodo, todoTitle: e.target.value})}
            />
            <textarea
            rows="10"
            name="tododescription"
            value={updatedTodo.todoDescription || ""}
            onChange={(e) => setUpdatedTodo({...updatedTodo, todoDescription: e.target.value})}
            />
            <button onClick={() => handleTodoUpdate()}>Обновить</button>
        </div>
  )
}

export default UpdateTodoForm;
