import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';
import '../pages/Todos.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';

const UpdateTodoForm = ({updateTodoId, updateTodo}) => {

const [updatedTodo, setUpdatedTodo] = useState(
  {
    id: "",
    title: "",
    description: "",
    status: "",
    startTime: "",
    endTime: "",
  }
);

const [errors, setErrors] = useState(
  {
    errors: "",
    title: "",
    starttime: "",
    endtime: "",
  }
);
const [validForm, setValidForm] = useState(false);

useEffect(() => {
  setUpdatedTodo(updateTodoId)
}, [updateTodoId]);

useEffect(() => {
  if (updatedTodo.title !== "" 
  && updatedTodo.description !== "" 
  && updatedTodo.startTime !== "" 
  && updatedTodo.endTime !== "") {
    setValidForm(true)
  } else {
    setValidForm(false)
  }
}, [kjmupdatedTodo.title, updatedTodo.description, updatedTodo.startTime, updatedTodo.endTime]);

const validate = (name, value) => {
  switch (name) {
    case "title":
      !new RegExp(/^[^\s]/).test(value)
        ? setErrors({...errors, title: "Укажите корректный заголовок"})
        : setErrors({...errors, title: ""})
      break;
    case "description":
      !new RegExp(/^[^\s]/).test(value)
        ? setErrors({...errors, description: "Укажите корректное описание"})
        : setErrors({...errors, description: ""})
      break;
    default:
      break;
  }
}

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
  validate(name, value)
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
           {errors.title && <div className="form-error">{errors.title}</div>}
            <FormInput
            value={updatedTodo.title || ""}
            name="title"
            onChange={(e) => handleChange(e)}
            />
            {errors.description && <div className="form-error">{errors.description}</div>}
            <textarea
            rows="10"
            name="description"
            value={updatedTodo.description || ""}
            onChange={(e) => handleChange(e)}
            />
             <DatePicker
              name="starttime"
              value={updatedTodo.startTime}
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
              />
              <DatePicker 
                name="endtime"
                value={updatedTodo.endTime}
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
              />
            <button disabled={!validForm} type='submit' className="add-btn" onClick={() => handleTodoUpdate()}>Обновить</button>
        </div>
  )
}

export default UpdateTodoForm;
