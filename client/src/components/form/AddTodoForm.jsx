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

  const [titleDirty, setTitleDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [startTimeDirty, setStartTimeDirty] = useState(false);
  const [endTimeDirty, setEndTimeDirty] = useState(false);

  const [titleError, setTitleError] = useState('Укажите название');
  const [descriptionError, setDescriptionError] = useState('Укажите описание');
  const [startTimeError, setStartTimeError] = useState('Укажите дату начала');
  const [endTimeError, setEndTimeError] = useState('Укажите дату окончания');
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (titleError || descriptionError || startTimeError || endTimeError) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }

  }, [titleError, descriptionError, startTimeError, endTimeError]);


  const bluerHandler = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitleDirty(true)
        break
      case 'description':
        setDescriptionDirty(true)
        break
      case 'starttime':
        setStartTimeDirty(true)
        break
      case 'endtime':
        setEndTimeDirty(true)
        break
    }

  }

  const titleHandler = (e) => {
    setTodo({...todo, title: e.target.value});
    setTitleError('');
    if (!e.target.value) {
      setTitleError('Укажите название')
    }
  }

  const descriptionHandler = (e) => {
    setTodo({...todo, description: e.target.value})
    setDescriptionError('');
    if (!e.target.value) {
      setDescriptionError('Укажите описание')
    }
  }

  const startTimeHandler = (date) => {
    setTodo({...todo, startTime:date})
    setStartTimeError('');
    if (!date.target.value) {
      setStartTimeError('Укажите дату начала')
    }
  }
  const endTimeHandler = (date) => {
    setTodo({...todo, endTime:date})
    setEndTimeError('');
    if (!date.target.value) {
      setEndTimeError('Укажите дату конца')
    }
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
      {(titleDirty && titleError) && <div>{titleError}</div>}
      <FormInput
        onBlur={e => bluerHandler(e)}
        placeholder="Название задачи"
        value={todo.title}
        name="title"
        onChange={(e) => titleHandler(e)}
      />
      {(descriptionDirty && descriptionError) && <div>{descriptionError}</div>}
      <textarea
        onBlur={e => bluerHandler(e)}
        value={todo.description}
        name="description"
        onChange={(e) => descriptionHandler(e)}
        cols="20"
        rows="10"
      />
      {(startTimeDirty && startTimeError) && <div>{startTimeError}</div>}
      <DatePicker
        onBlur={e => bluerHandler(e)}
        name="starttime"
        selected={todo.startTime}
        onChange={(date) => startTimeHandler(date)}
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
       {(endTimeDirty && endTimeError) && <div>{endTimeError}</div>}
      <DatePicker
        onBlur={e => bluerHandler(e)}
        name="endtime"
        selected={todo.endTime}
        onChange={(date) => endTimeHandler(date)}
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
