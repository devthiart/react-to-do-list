import { useState } from 'react';
import { useContext } from 'react';
import { TarefaContext } from '../../context/TarefaContext';

const Tarefa = ({ tarefa }) => {
  const { deletarTarefa, toggleStatusTarefa } = useContext(TarefaContext);
  const [isChecked, setIsChecked] = useState(tarefa.status === 'concluida' ? true : false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    toggleStatusTarefa(tarefa.id);
  }

  const handleDelete = () => {
    deletarTarefa(tarefa.id);
  }
  
  return (
    <li className="lista-tarefas__item-lista">
      <div className={"tarefa " + tarefa.status}>
        <input type="checkbox" onChange={handleChange} checked={isChecked} />
        <span>{tarefa.titulo}</span>
        <button className="delete" onClick={handleDelete}>Deletar</button>
      </div>
    </li>
  )
}

export default Tarefa;
