import './Squad.css'

function Squad(props) {
  return (
    <section className='squad' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
    </section>
  );  
}

export default Squad;
