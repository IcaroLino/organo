import hexToRgba from 'hex-to-rgba';
import MemberCard from '../MemberCard';
import './Squad.css'

function Squad({ members, squad, changeColor, remove }) {
  return (
    (members.length > 0) && <section className='squad' style={{ backgroundColor: hexToRgba(squad.color, 0.6), backgroundImage: "url(/images/bg.png)" }}>
      <input type='color' className='input-color' value={squad.color} onChange={(event) => changeColor(event.target.value, squad.id)} />
      <h3 style={{ borderColor: squad.color }}>{squad.name}</h3>
      <div className='members'>
        {members.map((member) => <MemberCard key={member.id} headerColor={squad.color} member={member} remove={remove} />)}
      </div>
    </section>
  );  
}

export default Squad;
