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
      <h2 className="lista-tarefas__titulo">Tarefas</h2>
      <label>Filtrar Tarefa: </label>
      <select className="lista-tarefas__filtro" value={filtro} onChange={(event) => {setFiltro(event.target.value)}}>
        <option className="lista-tarefas__item-filtro" value="todas" default>Todas</option>
        <option className="lista-tarefas__item-filtro" value="pendente">Pendentes</option>
        <option className="lista-tarefas__item-filtro" value="concluida">Concluídas</option>
      </select>
      <ul className="lista-tarefas__lista">
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
