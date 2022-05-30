import React, { useEffect, useMemo, useState } from 'react'
import Todos from '../pages/Todos'
import FormInput from './FormInput';
import '../pages/Todos.css'

export default function UpdateTodoForm({updateTodoId}) {

const [todo, setTodo] = useState({
  id: "",
  todoTitle: "",
  todoDescription: "",
  todoAddTime: ""
});

useEffect(() => {
  setTodo(updateTodoId);
}, [updateTodoId]);

const handleUpdate = (e) => {
  e.preventDefault()
}


  return (
        <div className="update-todo-form">
            <FormInput
            placeholder="update me"
            value={todo.todoTitle}
            name="todotitle"
            onChange={(e) => handleUpdate(e)}
            />
            <textarea 
            cols="30" 
            rows="10"
            name="tododescription"
            value={todo.todoDescription}
            onChange={(e) => handleUpdate(e)}
            />
            <button onClick={() => console.log('fdfdfd')}>Обновить</button>
        </div>
  )
}
