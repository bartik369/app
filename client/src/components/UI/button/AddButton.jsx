import React from "react";
import classes from './AddButton.module.css'

const AddButton = ({ children, props }) => {
  return (
    <button className={classes.AddBtn}>{children}</button>
  )
};

export default AddButton;
