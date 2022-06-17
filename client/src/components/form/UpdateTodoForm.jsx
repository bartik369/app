import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';
import '../pages/Todos.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';

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
              selected={Date.parse(updatedTodo.startTime)}
              onChange={(date) => setUpdatedTodo({...updatedTodo, startTime:date})}
              selectsStart
              startDate={Date.parse(updatedTodo.startTime)}
              endDate={Date.parse(updatedTodo.endTime)}
              className="date-input"
              placeholderText="Дата начала"
              showTimeSelect
              timeFormat="p"
              timeIntervals={15}
              dateFormat="Pp"
              timeCaption="time"
              locale={ru}
              value={updatedTodo.startTime}
              />
              <DatePicker 
                selected={Date.parse(updatedTodo.endTime)}
                onChange={(date) => setUpdatedTodo({...updatedTodo, endTime:date})}
                selectsEnd
                startDate={Date.parse(updatedTodo.startTime)}
                endDate={Date.parse(updatedTodo.endTime)}
                minDate={Date.parse(updatedTodo.startTime)}
                className="date-input"
                placeholderText="Дата завершения"
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="Pp"
                timeCaption="time"
                locale={ru}
                value={updatedTodo.endTime}
              />
            <button className="add-btn" onClick={() => handleTodoUpdate()}>Обновить</button>
        </div>
  )
}

export default UpdateTodoForm;
