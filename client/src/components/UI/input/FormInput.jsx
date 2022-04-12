import React from 'react';
import classes from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <input className={classes.FormInput} {...props}
        />
    );
};

export default FormInput;