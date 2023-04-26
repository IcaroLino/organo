import { useState } from 'react';
import Banner from './components/Banner';
import Squad from './components/Squad';
import Form from './components/Form';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import IMember from './interfaces/IMember';
import ISquad from './interfaces/ISquad';

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

  const [members, setMembers] = useState<IMember[]>([]);

  function addMember(member: IMember) {
    setMembers([...members, member]);
  }

  function removeMember(id: string) {
    setMembers(members.filter((member) => member.id !== id));
  }

  function changeColor(color: string, id: string) {
    setSquads(squads.map((squad) => {
      if (squad.id === id) squad.color = color;
      return squad;
    }));
  }

  function addSquad(squad: ISquad) {
    setSquads([...squads, squad]);
  }

  function favoriteMember(id: string) {
    setMembers(members.map((member) => {
      if (member.id === id) member.favorite = !member.favorite;
      return member;
    }));
  }

  return (
    <div className="App">
      <Banner src="/images/banner.png" alt="O banner principal da página do Organo" />
      <Form
        squads={squads.map((squad) => squad.name)}
        onSaveMember={(member) => addMember(member)}
        onSaveSquad={(squad) => addSquad(squad)}
      />
      {squads.map((squad) => 
        <Squad 
          key={squad.id}
          squad={squad}
          changeColor={changeColor}
          members={members.filter((member) => member.squad === squad.name)}
          remove={removeMember}
          favorite={favoriteMember}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
