import './Field.css'

function Field({ label, value, onChange, placeholder, required = 'false' }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input value={value} onChange={(event) => onChange(event.target.value)} required={required} placeholder={placeholder} />
    </div>
  );  
}

export default Field;
