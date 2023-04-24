import React from 'react';
import './DropdownList.css';

interface DropdownListProps {
  label: string,
  value: string,
  items: string[],
  onChange: (value: string) => void,
  required: boolean,
}

function DropdownList({ label, value, items, onChange, required = false } : DropdownListProps) {
  return (
    <div className='dropdown-list'>
      <label>{label}</label>
      <select onChange={(event) => onChange(event.target.value)} required={required} value={value}>
        <option value=""></option>
        {items.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default DropdownList;