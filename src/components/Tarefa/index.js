import { useState } from 'react';
import { useContext } from 'react';
import { TarefaContext } from '../../context/TarefaContext';

const Tarefa = ({id, titulo}) => {
  const { deletarTarefa, toggleStatusTarefa } = useContext(TarefaContext);
  const [status, setStatus] = useState('pendente');

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setStatus(isChecked ? 'concluida' : 'pendente');
    toggleStatusTarefa(id);
  }

  const handleDelete = () => {
    deletarTarefa(id);
  }
  
  return (
    <li>
      <div className={"tarefa " + status}>
        <input type="checkbox" onChange={handleChange} />
        <span>{titulo}</span>
        <button className="delete" onClick={handleDelete}>Deletar</button>
      </div>
    </li>
  )
}

export default Tarefa;
