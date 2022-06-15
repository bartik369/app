import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';
import '../pages/Todos.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateTodoForm = ({updateTodoId, updateTodo}) => {

const [updatedTodo, setUpdatedTodo] = useState({
  id: "",
  title: "",
  description: "",
  status: "",
  startTime: "",
  endTime: "",
});

useEffect(() => {
  setUpdatedTodo(updateTodoId)
}, [updateTodoId])

const handleTodoUpdate = () => {
  const updateTodoData = {
    id: updatedTodo._id,
    title: updatedTodo.title,
    description: updatedTodo.description,
    status: updatedTodo.status,
    startTime: updatedTodo.startTime,
    endTime: updatedTodo.endTime,
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
            <DatePicker
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy hh:mm"
              className="date-input"
              placeholderText="Дата начала"
              value={updateTodo.startTime}
              selected={Date.parse(updatedTodo.startTime)} 
              onChange={(date) =>  setUpdatedTodo({...updatedTodo, startTime:date})}
            />
            <DatePicker 
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy hh:mm"
             className="date-input"
             placeholderText="Дата завершения"
             value={updateTodo.endTime}
             selected={Date.parse(updatedTodo.endTime)} 
             onChange={(date) =>  setUpdatedTodo({...updatedTodo, endTime:date})} 
            />
            <button className="add-btn" onClick={() => handleTodoUpdate()}>Обновить</button>
        </div>
  )
}

export default UpdateTodoForm;
