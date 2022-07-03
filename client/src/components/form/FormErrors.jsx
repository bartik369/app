import React from 'react';

const FormErrors = ({formErrors}) => {
    return (
        <div className="form-errors">
          {Object.keys(formErrors).map((name, i) => {
            if (formErrors[name].length > 0) {
                return (
                    <p key={i}>{name} {formErrors[name]}</p>
                )
            } else {
                return '';
            }
          })}
        </div>
    )
}

export default FormErrors;