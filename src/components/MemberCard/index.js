import { AiFillCloseCircle } from 'react-icons/ai'
import './MemberCard.css'

function MemberCard(props) {
  return (
    <div className='member-card'>
      <AiFillCloseCircle size={25} className='remove' onClick={() => props.remove(props.member.id)} />
      <div className='header' style={{ backgroundColor: props.headerColor }}>
        <img src={props.member.image} alt={props.member.name} />
      </div>
      <div className='footer'>
        <h4>{props.member.name}</h4>
        <h5>{props.member.role}</h5>
      </div>
    </div>
  );  
}

export default MemberCard;