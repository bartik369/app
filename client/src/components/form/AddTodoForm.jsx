import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';

const AddTodoForm = ({ create, modal }) => {
  const [todo, setTodo] = useState(
    {
      id: "",
      title: "",
      description: "",
      status: "",
      startTime: "",
      endTime: "",
      }
  );

  const [errors, setErrors] = useState({
    errors: "",
    title: "",
    starttime: "",
    endtime: "",
  });
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if ((errors.title === "") 
    && (errors.description === "")
    && (errors.starttime === "")
    && (errors.endtime === "")
    ) {
      setValidForm(true)
    } else {
    }
  }, [errors.description, errors.title, errors.starttime, errors.endtime]);

  const validate = (name, value, startTime) => {
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
      case "starttime":
       if (startTime.length === 0) {
        setErrors({...errors, starttime: "Укажите корректный заголовок"})
       } else {
        setErrors({...errors, starttime: ""})
       }
      break;
      default:
        break;
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    validate(name, value)
    setTodo({...todo, [name]: value})
  }

  const handleStartTime = (date) => {
    const startTime = (date.toLocaleString('ru-RU'));
    validate(startTime)
    setTodo({...todo, startTime: date})
  }

  const handleEndTime = (date) => {
    validate(date)
    setTodo({...todo, endTime: date})
  }

  const addTodoHandler = () => {
     const newTodo = {
      title: todo.title,
      description: todo.description,
      status: "inprocess",
      startTime: todo.startTime,
      endTime: todo.endTime,
    };
    create(newTodo);
    setTodo({
      id: "",
      title: "",
      description: "",
      status: "",
      startTime: "",
      endTime: "",
    })
    const popOut = () => {
      modal(false)
    }
    setTimeout(popOut, 1000);
  };

  return (
    <div className="add-todo-form">
      {errors.title && <h3>{errors.title}</h3>}
      <FormInput
        placeholder="Название задачи"
        value={todo.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      {errors.description && <h3>{errors.description}</h3>}
      <textarea
        value={todo.description}
        name="description"
        onChange={(e) => handleChange(e)}
        cols="20"
        rows="10"
      />
      {errors.starttime && <h3>{errors.starttime}</h3>}
      <DatePicker
        name="starttime"
        value={todo.startTime}
        selected={todo.startTime}
        onChange={(date) => handleStartTime(date)}
        selectsStart
        startDate={todo.startTime}
        endDate={todo.endTime}
        className="date-input"
        placeholderText="Дата начала"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
        timeCaption="time"
        locale={ru}
      />
      {errors.endtime && <h3>{errors.endtime}</h3>}
      <DatePicker
        name="endtime"
        value={todo.endTime}
        selected={todo.endTime}
        onChange={(date) => handleEndTime(date)}
        selectsEnd
        startDate={todo.startTime}
        endDate={todo.endTime}
        minDate={todo.startTime}
        className="date-input"
        placeholderText="Дата завершения"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
        timeCaption="time"
        locale={ru}
      />
      
      <button disabled={!validForm} type='submit' className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
