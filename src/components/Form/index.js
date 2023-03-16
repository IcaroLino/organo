import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css'

function Form(props) {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [squad, setSquad] = useState('');

  const saveForm = (event) => {
    event.preventDefault();
    props.onSave({
      name,
      role,
      image,
      squad,
    });
  }

  return (
    <section className='form'>
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={role}
          onChange={(value) => setRole(value)}
        />
        <TextField
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
    </section>
  );
}

export default Form;