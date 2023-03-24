import './Field.css'

function Field({ label, value, onChange, placeholder, required = false, type = 'text' }) {
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
