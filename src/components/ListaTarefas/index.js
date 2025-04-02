import Tarefa from '../Tarefa';

const ListaTarefas = ({ tarefas }) => {
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
            <Tarefa titulo={tarefa.titulo} />
          ))
        } 
      </ul>
    </>
  )
}

export default ListaTarefas;
