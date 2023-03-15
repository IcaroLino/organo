import './TextField.css'

function TextField(props) {
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input required={props.required} placeholder={props.placeholder} />
    </div>
  );  
}

export default TextField;
