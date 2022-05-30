import React, { useState } from 'react'
import Todos from '../pages/Todos'
import FormInput from './FormInput';
import '../pages/Todos.css'

export default function UpdateTodoForm({updateTodoId}) {

//   const [todo, setTodo] = useState([]);

  return (
        <div className="update-todo-form">
            <FormInput
            placeholder="update me"
            value={updateTodoId.todoTitle}
            name="todototle"
            onChange={() =>console.log('')}
            />
            <textarea 
            cols="30" 
            rows="10"
            name="tododescription"
            value={updateTodoId.todoDescription}
            onChange={() => console.log('')}
            />
            <button onClick={() => console.log('fdfdfd')}></button>
        </div>
  )
}
