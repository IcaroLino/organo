import { useState } from 'react';
import Banner from './components/Banner';
import Squad from './components/Squad';
import Form from './components/Form';

function App() {

  const squads = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9', 
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF', 
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2' , 
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8', 
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5', 
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9', 
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF', 
    },
  ];

  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    console.log(members);
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner />
      <Form squads={squads.map((squad) => squad.name)} onSave={(member) => addMember(member)}/>
      {squads.map((squad) => <Squad key={squad.name} name={squad.name} primaryColor={squad.primaryColor} secondaryColor={squad.secondaryColor} />)}
    </div>
  );
}

export default App;
