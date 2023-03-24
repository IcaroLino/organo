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
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9', 
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF', 
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2' , 
    },
    {
      id: uuidv4(),
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8', 
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5', 
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9', 
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF', 
    },
  ]);

  const [members, setMembers] = useState([]);

  function addMember(member) {
    setMembers([...members, member]);
  }

  function removeMember(id) {
    setMembers(members.filter((member) => member.id !== id));
  }

  return (
    <div className="App">
      <Banner />
      <Form squads={squads.map((squad) => squad.name)} onSave={(member) => addMember(member)}/>
      {squads.map((squad) => 
        <Squad 
          key={squad.name}
          name={squad.name}
          primaryColor={squad.primaryColor}
          secondaryColor={squad.secondaryColor}
          members={members.filter((member) => member.squad === squad.name)}
          remove={removeMember}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
