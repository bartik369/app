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

  const [errors, setErrors] = useState(
    {
      title: "",
      description: "",
    }
    )
  useEffect(() => {
  }, []);

  const validate = (name, value) => {
    switch (name) {
      case "title":
        if (value.length <= 4) {
          setErrors({...errors, title: "Title is so short"})
        } else {
          setErrors({...errors, title: ""})
        }
        break;
      case "description":
        if (value.length <= 15) {
          setErrors({...errors, description: "Description too short"})
        } else {
          setErrors({...errors, description: ""})
        }
        break
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
      
      <button type='submit' className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
