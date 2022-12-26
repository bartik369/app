import React from 'react'

function TodoButton({ action}) {

  return (
    <button className="tododel-btn" onClick={action}>
    <i className="bi bi-trash3" title="Удалить"></i>
  </button>
  )
}

export default TodoButton