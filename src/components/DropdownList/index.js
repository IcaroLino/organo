import './DropdownList.css'

function DropdownList(props) {
  return (
    <div className='dropdown-list'>
      <label>{props.label}</label>
      <select required={props.required}>
        {props.items.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default DropdownList;