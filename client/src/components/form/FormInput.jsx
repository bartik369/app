import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    return (
        <input
        value={props.inputValue}
        className="form-input" {...props} />
    );
};

export default FormInput;