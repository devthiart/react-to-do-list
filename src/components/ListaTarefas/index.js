import { useContext } from 'react';
import Tarefa from '../Tarefa';
import { TarefaContext } from '../../context/TarefaContext';

const ListaTarefas = () => {
  const { tarefas } = useContext(TarefaContext);
  return (
    <>
    <h2>Lista de Tarefas</h2>
      <span>Filtrar Tarefa: </span>
      <select className="filtro-tarefa">
        <option value="todas">Todas</option>
        <option value="pendente">Pendentes</option>
        <option value="concluida">Concluídas</option>
      </select>
      <h2>Tarefas</h2>
      <ul className="tarefas">
        {
          tarefas.map((tarefa) => (
            <Tarefa key={tarefa.id} titulo={tarefa.titulo} />
          ))
        } 
      </ul>
    </>
  )
}

export default ListaTarefas;
