import { AiFillCloseCircle } from 'react-icons/ai'
import './MemberCard.css'

function MemberCard({ member, headerColor, remove }) {
  return (
    <div className='member-card'>
      <AiFillCloseCircle size={25} className='remove' onClick={() => remove(member.id)} />
      <div className='header' style={{ backgroundColor: headerColor }}>
        <img src={member.image} alt={member.name} />
      </div>
      <div className='footer'>
        <h4>{member.name}</h4>
        <h5>{member.role}</h5>
      </div>
    </div>
  );  
}

export default MemberCard;