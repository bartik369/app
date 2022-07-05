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
      }
  );
  const [valid, setValid] = useState(
    {
      title: "",
      description: "",
    }
  )

  const [errors, setErrors] = useState(
    {
      title: "",
      description: "",
    }
  )
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
  }, []);

  const validate = (name, value) => {
    let titleValid = valid.title;
    let descriptionValid = valid.description;
    titleValid = value.match(/^[^\s]/)
    switch (name) {
      case "title":
        !titleValid || value === ""
          ? setErrors({...errors, title: "Укажите корректный заголовок"})
          : setErrors({...errors, title: ""})
        break;
      // case "description":
      //   if (!value.match(regexpText)) {
      //     setErrors({...errors, description: "Укажите корректное описание задачи"})
      //   } else {
      //     setErrors({...errors, description: ""})
      //   }
      //   break
      default:
        break;
    }
    validateForm()
  }
  const validateForm = () => {
   
  }

 
  const handleChange = (e) => {
    const {name, value} = e.target;
    validate(name, value)
    setTodo({...todo, [name]: value})
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
      
      <button disabled={!validForm} type='submit' className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
