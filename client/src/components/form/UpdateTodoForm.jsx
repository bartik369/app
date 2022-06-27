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

const handleChange = (e) => {
  const {name, value} = e.target;
  setUpdatedTodo({...updatedTodo, [name]: value})
}

const handleStartTime = (date) => {
  setUpdatedTodo({...updatedTodo, startTime: date})
}

const handleEndTime = (date) => {
  setUpdatedTodo({...updatedTodo, endTime: date})
}

  return (
        <div className="update-todo-form">
            <FormInput
            value={updatedTodo.title || ""}
            name="title"
            onChange={(e) => handleChange(e)}
            />
            <textarea
            rows="10"
            name="description"
            value={updatedTodo.description || ""}
            onChange={(e) => handleChange(e)}
            />
             <DatePicker
              selected={Date.parse(updatedTodo.startTime)}
              onChange={(date) => handleStartTime(date)}
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
                onChange={(date) => handleEndTime(date)}
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
