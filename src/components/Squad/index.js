import MemberCard from '../MemberCard';
import './Squad.css'

function Squad(props) {
  return (
    <section className='squad' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className='members'>
        {props.members.map((member) => <MemberCard name={member.name} role={member.role} image={member.image} />)}
      </div>
    </section>
  );  
}

export default Squad;
