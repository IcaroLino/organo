import hexToRgba from 'hex-to-rgba';
import MemberCard from '../MemberCard';
import './Squad.css'

function Squad(props) {
  return (
    (props.members.length > 0) && <section className='squad' style={{ backgroundColor: hexToRgba(props.squad.color, 0.6), backgroundImage: "url(/images/bg.png)" }}>
      <input type='color' className='input-color' value={props.squad.color} onChange={(event) => props.changeColor(event.target.value, props.squad.id)} />
      <h3 style={{ borderColor: props.squad.color }}>{props.squad.name}</h3>
      <div className='members'>
        {props.members.map((member) => <MemberCard key={member.id} headerColor={props.squad.color} member={member} remove={props.remove} />)}
      </div>
    </section>
  );  
}

export default Squad;
