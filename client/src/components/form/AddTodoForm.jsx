import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import FormErrors from "./FormErrors";


const AddTodoForm = ({ create, modal }) => {
  const [todo, setTodo] = useState(
    {
      id: "",
      title: "",
      description: "",
      status: "",
      startTime: "",
      endTime: "",
      formErrors: {
        title: "",
        description: "",
      },
      titleValid: false,
      descriptionValide: false,
      stratTimeValid: false,
      endTimeValid: false,
      formValid: false,
      }
  );


  useEffect(() => {
  }, []);

  const validateField = (name, value) => {
    let fieldValidationErros = todo.formErrors;
    let titleValid = todo.titleValid;
    let descriptionValid = todo.descriptionValide;

    switch(name) {
      case "title":
        titleValid = value.length >= 5;
        fieldValidationErros.title = titleValid ? "" : "Заголовок должен быть не короче 5 символов";
        break;
      case "description":
        descriptionValid = value.length >= 15;
        fieldValidationErros.description = descriptionValid ? "" : "Описание должно быть не короче 15 символов"
        break;
        default:
        break;
    }
    setTodo({
      formErrors: fieldValidationErros, 
      titleValid: titleValid,
      descriptionValide: descriptionValid,
    }, validateForm())
  }

  const validateForm = () => { 
    setTodo({formValid: todo.titleValid && todo.descriptionValide})
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTodo({...todo, [name]: value})
    validateField(name, value)
  }

  const handleStartTime = (date) => {
    setTodo({...todo, startTime: date})
  }

  const handleEndTime = (date) => {
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
      {/* <FormErrors formErrors={todo.formErrors}/> */}
      <div>{todo.formErrors.title}</div>
      <FormInput
        placeholder="Название задачи"
        value={todo.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <div>{todo.formErrors.description}</div>
      <textarea
        value={todo.description}
        name="description"
        onChange={(e) => handleChange(e)}
        cols="20"
        rows="10"
      />
      <DatePicker
        name="starttime"
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
      <DatePicker
        name="endtime"
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
      
      <button disabled={!todo.formValid} type='submit' className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
