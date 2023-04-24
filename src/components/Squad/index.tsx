import React from 'react';
import hexToRgba from 'hex-to-rgba';
import MemberCard from '../MemberCard';
import './Squad.css';
import IMember from '../../interfaces/IMember';
import ISquad from '../../interfaces/ISquad';

interface SquadProps {
  members: IMember[],
  squad: ISquad,
  changeColor: (color: string, id: string) => void, 
  remove: (id: string) => void, 
  favorite: (id: string) => void,
}

function Squad({ members, squad, changeColor, remove, favorite } : SquadProps) {
  return (
    (members.length > 0) && <section className='squad' style={{ backgroundColor: hexToRgba(squad.color, 0.6), backgroundImage: "url(/images/bg.png)" }}>
      <input type='color' className='input-color' value={squad.color} onChange={(event) => changeColor(event.target.value, squad.id)} />
      <h3 style={{ borderColor: squad.color }}>{squad.name}</h3>
      <div className='members'>
        {members.map((member) => 
          <MemberCard 
            key={member.id}
            headerColor={squad.color}
            member={member}
            remove={remove}
            favorite={favorite} 
          />
        )}
      </div>
    </section>
  );  
}

export default Squad;
