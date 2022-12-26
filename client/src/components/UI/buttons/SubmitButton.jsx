import React from 'react';
import "./buttons.css"

function SubmitButton({...props}) {
  return (
    <button className="submit-btn" type="submit">
      {props.title}
    </button>
  )
}

export default SubmitButton;