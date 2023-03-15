import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    console.log(members);
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onSave={(member) => addMember(member)}/>
    </div>
  );
}

export default App;
