import './MemberCard.css'

function MemberCard(props) {
  return (
    <div className='member-card'>
      <div className='header' style={{ backgroundColor: props.headerColor }}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='footer'>
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
      </div>
    </div>
  );  
}

export default MemberCard;