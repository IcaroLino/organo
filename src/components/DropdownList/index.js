import './DropdownList.css'

function DropdownList({ label, value, items, onChange, required = false }) {
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