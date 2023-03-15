import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css'

function Form(props) {
  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const saveForm = (event) => {
    event.preventDefault();
    console.log('Form submetido');
  }

  return (
    <section className='form'>
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" placeholder="Digite o seu nome" />
        <TextField required={true} label="Cargo" placeholder="Digite o seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList required={true} label="Times" items={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Form;