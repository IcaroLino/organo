import './MemberCard.css'

function MemberCard(props) {
  return (
    <div className='member-card'>
      <div className='header'>
        <img src='https://github.com/icarolino.png' alt='Icaro Lino' />
      </div>
      <div className='footer'>
        <h4>Icaro Lino</h4>
        <h5>Dev</h5>
      </div>
    </div>
  );  
}

export default MemberCard;