import MemberCard from '../MemberCard';
import './Squad.css'

function Squad(props) {
  return (
    (props.members.length > 0) && <section className='squad' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className='members'>
        {props.members.map((member) => <MemberCard key={member.name} name={member.name} role={member.role} image={member.image} />)}
      </div>
    </section>
  );  
}

export default Squad;
