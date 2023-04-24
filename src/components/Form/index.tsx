import React, { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import Field from '../Field';
import './Form.css';
import IMember from '../../interfaces/IMember';
import ISquad from '../../interfaces/ISquad';
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  onSaveMember: (member: IMember) => void ,
  onSaveSquad: (squad: ISquad) => void,
  squads: string[],
}

function Form({ onSaveMember, onSaveSquad, squads } : FormProps) {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [squad, setSquad] = useState('');
  const [squadName, setSquadName] = useState('');
  const [squadColor, setSquadColor] = useState('#D9F7E9');

  function saveMember(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSaveMember({
      id: uuidv4(),
      favorite: false,
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

  function saveSquad(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSaveSquad({
      id: uuidv4(),
      name: squadName,
      color: squadColor,
    });
    setSquadName('');
    setSquadColor('#D9F7E9');
  }

  return (
    <section className='form'>
      <form onSubmit={saveMember}>
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
          items={squads}
          value={squad}
          onChange={(value) => setSquad(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={saveSquad}>
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