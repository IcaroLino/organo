import React from 'react';
import './Field.css';

interface FieldProps {
  label: string,
  value: string,
  onChange: (value: string) => void,
  placeholder: string,
  required?: boolean,
  type?: string,
}

function Field({ label, value, onChange, placeholder, required = false, type = 'text' } : FieldProps) {
  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input 
        type={type} 
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        placeholder={placeholder} 
      />
    </div>
  );  
}

export default Field;
