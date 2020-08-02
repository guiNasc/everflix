import React from 'react';

const FormField = ({label ,type, name ,value, onChange}) => {
    return (
        <div>
            <label>
                {label}:
        </label>
            <input type="text"
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
};

export default FormField;