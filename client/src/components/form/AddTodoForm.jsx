import React, { useState } from "react";
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
      <FormInput
        placeholder="Название задачи"
        value={todo.title}
        name="title"
        onChange={(e) => setTodo({...todo, title: e.target.value})}
      />
      <textarea
        value={todo.description}
        name="description"
        onChange={(e) => setTodo({...todo, description: e.target.value})}
        cols="20"
        rows="10"
      />
      <DatePicker
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
      timeCaption="time"
      locale={ru}
      className="date-input"
      placeholderText="Дата начала"
      selected={todo.startTime} 
      onChange={(date) => setTodo({...todo, startTime:date})} />
      <DatePicker
       showTimeSelect
       timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
       timeCaption="time"
       locale={ru}
      className="date-input"
      placeholderText="Дата завершения"
      selected={todo.endTime} 
      onChange={(date) => setTodo({...todo, endTime:date})} />
      <button className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
