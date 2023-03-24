import { useState } from 'react';
import Banner from './components/Banner';
import Squad from './components/Squad';
import Form from './components/Form';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [squads, setSquads] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#D86EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FEBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ]);

  const [members, setMembers] = useState([]);

  function addMember(member) {
    setMembers([...members, member]);
  }

  function removeMember(id) {
    setMembers(members.filter((member) => member.id !== id));
  }

  function changeColor(color, id) {
    setSquads(squads.map((squad) => {
      if (squad.id === id) squad.color = color;
      return squad;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Form squads={squads.map((squad) => squad.name)} onSave={(member) => addMember(member)}/>
      {squads.map((squad) => 
        <Squad 
          key={squad.name}
          squad={squad}
          changeColor={changeColor}
          members={members.filter((member) => member.squad === squad.name)}
          remove={removeMember}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
