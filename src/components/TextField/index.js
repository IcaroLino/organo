import './TextField.css'

function TextField(props) {
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.value} onChange={(event) => props.onChange(event.target.value)} required={props.required} placeholder={props.placeholder} />
    </div>
  );  
}

export default TextField;
