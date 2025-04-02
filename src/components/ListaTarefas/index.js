import Tarefa from '../Tarefa';

const ListaTarefas = ({ tarefas }) => {
  return (
    <>
      <h3>Filtrar Tarefa</h3>
      <select className="filtro-tarefa">
        <option value="todas">Todas</option>
        <option value="pendente">Pendentes</option>
        <option value="concluida">Concluídas</option>
      </select>
      <h2>Lista de Tarefas</h2>
      <ul className="tarefas">
        {
          tarefas.map((tarefa) => (
            <Tarefa tituloTarefa={tarefa.tituloTarefa} />
          ))
        } 
      </ul>
    </>
  )
}

export default ListaTarefas;
