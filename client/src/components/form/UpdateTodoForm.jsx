import React, { useEffect, useState } from 'react'
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
  setTodo(updateTodoId)
}, [updateTodoId])



  return (
        <div className="update-todo-form">
            <FormInput
            placeholder="update me"
            value={updateTodoId.todoTitle || ""}
            name="todotitle"
            onChange={(e) => setTodo({...todo, todoTitle: e.target.value})}
            />
            <textarea 
            cols="30" 
            rows="10"
            name="tododescription"
            value={updateTodoId.todoDescription || ""}
            onChange={(e) => setTodo({...todo, todoDescription: e.target.value})}
            />
            <button onClick={() => console.log('fdfdfd')}>Обновить</button>
        </div>
  )
}
