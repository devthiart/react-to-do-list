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
    <li className="container-tarefas__lista__item">
      <div className={"container-tarefas__lista__item__tarefa"}>
        <input className="tarefa__check" type="checkbox" onChange={handleChange} checked={isChecked} />
        <span className={tarefa.status}>{tarefa.titulo}</span>
        <button className="tarefa__delete" onClick={handleDelete}>Deletar</button>
      </div>
    </li>
  )
}

export default Tarefa;
