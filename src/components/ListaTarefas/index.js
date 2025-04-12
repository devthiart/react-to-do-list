import { useContext, useState, useEffect } from 'react';
import Tarefa from '../Tarefa';
import { TarefaContext } from '../../context/TarefaContext';

const ListaTarefas = () => {
  const { tarefas } = useContext(TarefaContext);
  const [filtro, setFiltro] = useState('todas');
  const [tarefasFiltradas, setTarefasFiltradas] = useState(tarefas);

  useEffect(() => {
    if(filtro === 'todas') {
      setTarefasFiltradas(tarefas);
    } else {
      setTarefasFiltradas(
        tarefas.filter((tarefa) => {
          return tarefa.status === filtro;
        })
      );
    }
  }, [tarefas, filtro]);

  return (
    <div className="lista-tarefas">
    <h2>Lista de Tarefas</h2>
      <span>Filtrar Tarefa: </span>
      <select className="filtro-tarefa" value={filtro} onChange={(event) => {setFiltro(event.target.value)}}>
        <option value="todas" default>Todas</option>
        <option value="pendente">Pendentes</option>
        <option value="concluida">Concluídas</option>
      </select>
      <h2>Tarefas</h2>
      <ul className="tarefas">
        {
          tarefasFiltradas.map((tarefa) => (
            <Tarefa key={tarefa.id} tarefa={tarefa} />
          ))
        } 
      </ul>
    </div>
  )
}

export default ListaTarefas;
