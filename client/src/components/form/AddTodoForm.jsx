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
        title: 'Enter todo title',
        description: 'Enter description',
      },
      titleValid: false,
      descriptionValid: false,
      formValid: false,
    }
  );


  useEffect(() => {
  }, []);

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

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTodo({...todo, [name]: value}, () => validateField(name, value))

  }

  const handleStartTime = (date) => {
    setTodo({...todo, startTime: date})
  }

  const handleEndTime = (date) => {
    setTodo({...todo, endTime: date})
  }

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = todo.formErrors;
    let titleValid = todo.titleValid;

    switch(fieldName) {
      case 'title':
        titleValid = "";
        fieldValidationErrors.title = titleValid ? "" : "please add title"
        break;
    }
    setTodo({formErrors: fieldValidationErrors, titleValid: titleValid}, validateForm())
  }
  const validateForm = () => {
    setTodo({formValid: todo.titleValid})
  }

  return (
    <div className="add-todo-form">
      <FormErrors formErrors={todo.formErrors}/>
      <FormInput
        placeholder="Название задачи"
        value={todo.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
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
      
      <button type='submit' className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
