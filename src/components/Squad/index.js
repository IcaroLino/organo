import MemberCard from '../MemberCard';
import './Squad.css'

function Squad(props) {
  return (
    (props.members.length > 0) && <section className='squad' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className='members'>
        {props.members.map((member) => <MemberCard key={member.name} headerColor={props.primaryColor} member={member} remove={props.remove} />)}
      </div>
    </section>
  );  
}

export default Squad;
