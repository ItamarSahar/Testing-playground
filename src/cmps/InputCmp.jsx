import React from 'react'

function InputCmp ({name, label, type, value, onChange}) {
    const handleChange = (ev) => {
        onChange({[name]: ev.target.value})
    }

    return (
        <span className="input-cmp">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={handleChange} />
        </span>
    )
}

export default InputCmp