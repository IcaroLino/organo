import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import Field from '../Field';
import './Form.css'

function Form(props) {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [squad, setSquad] = useState('');
  const [squadName, setSquadName] = useState('');
  const [squadColor, setSquadColor] = useState('');

  const saveForm = (event) => {
    event.preventDefault();
    props.onSave({
      name,
      role,
      image,
      squad,
    });
    setName('');
    setRole('');
    setImage('');
    setSquad('');
  }

  return (
    <section className='form'>
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Field
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={role}
          onChange={(value) => setRole(value)}
        />
        <Field
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <DropdownList
          required={true}
          label="Times"
          items={props.squads}
          value={squad}
          onChange={(value) => setSquad(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite o nome do time"
          value={squadName}
          onChange={(value) => setSquadName(value)}
        />
        <Field
          required={true}
          label="Cor"
          type='color'
          placeholder="Digite sua cor"
          value={squadColor}
          onChange={(value) => setSquadColor(value)}
        />        
        <Button>Criar Time</Button>
      </form>
    </section>
  );
}

export default Form;