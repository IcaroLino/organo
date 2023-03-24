import './Field.css'

function Field(props) {
  return (
    <div className="field">
      <label>{props.label}</label>
      <input value={props.value} onChange={(event) => props.onChange(event.target.value)} required={props.required} placeholder={props.placeholder} />
    </div>
  );  
}

export default Field;
