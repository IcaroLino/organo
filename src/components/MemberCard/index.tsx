import React from 'react';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './MemberCard.css';
import IMember from '../../interfaces/IMember';

interface MemberCardProps {
  member: IMember, 
  headerColor: string, 
  remove: (id: string) => void, 
  favorite: (id: string) => void,
}

function MemberCard({ member, headerColor, remove, favorite } : MemberCardProps) {

  function toggleFavorite() {
    favorite(member.id);
  }
  
  const propsFavorite = {
    size: 25,
    color: headerColor,    
    onClick: toggleFavorite
  }
  

  return (
    <div className='member-card'>
      <AiFillCloseCircle size={25} className='remove' onClick={() => remove(member.id)} />
      <div className='header' style={{ backgroundColor: headerColor }}>
        <img src={member.image} alt={member.name} />
      </div>
      <div className='footer'>
        <h4>{member.name}</h4>
        <h5>{member.role}</h5>
        <div className='favorite'>
          {member.favorite
            ? <AiFillHeart {...propsFavorite} />
            : <AiOutlineHeart {...propsFavorite} />
          }
        </div>
      </div>
    </div>
  );  
}

export default MemberCard;