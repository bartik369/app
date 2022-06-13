import React, { useState } from "react";
import FormInput from "./FormInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddTodoForm = ({ create, modal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [todo, setTodo] = useState(
    {
      id: "",
      title: "",
      description: "",
      status: "",
      addTime: "",
    }
  );

  const addTodoHandler = () => {
    const date = new Date();
    const todoTime = date.toLocaleDateString() + " " + date.toLocaleTimeString("ru-RU");
     const newTodo = {
      title: todo.title,
      description: todo.description,
      id: Date.now(),
      status: "inprocess",
      addTime: todoTime,
    };
    create(newTodo);
    setTodo({
      id: "",
      title: "",
      description: "",
      status: "",
      addTime: "",
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
      <label>Start</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <label>End</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      <button className="add-btn" onClick={() => addTodoHandler()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodoForm;
