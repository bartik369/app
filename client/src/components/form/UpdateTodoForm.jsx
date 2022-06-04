import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';
import '../pages/Todos.css'

const UpdateTodoForm = ({updateTodoId, updateTodo}) => {

const [updatedTodo, setUpdatedTodo] = useState({
  id: "",
  title: "",
  description: "",
  status: "",
  addTime: "",
});

useEffect(() => {
  setUpdatedTodo(updateTodoId)
}, [updateTodoId])

const handleTodoUpdate = () => {
  const date = new Date();
  const todoTime =
    date.toLocaleDateString() + " " + date.toLocaleTimeString("en-GB");
  const updateTodoData = {
    id: updatedTodo._id,
    title: updatedTodo.title,
    description: updatedTodo.description,
    status: updatedTodo.status,
    addTime: todoTime,
  }
  updateTodo(updateTodoData)
}

  return (
        <div className="update-todo-form">
            <FormInput
            value={updatedTodo.title || ""}
            name="title"
            onChange={(e) => setUpdatedTodo({...updatedTodo, title: e.target.value})}
            />
            <textarea
            rows="10"
            name="description"
            value={updatedTodo.description || ""}
            onChange={(e) => setUpdatedTodo({...updatedTodo, description: e.target.value})}
            />
            <button onClick={() => handleTodoUpdate()}>Обновить</button>
        </div>
  )
}

export default UpdateTodoForm;
