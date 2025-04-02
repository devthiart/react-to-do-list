import './App.css';
import Tarefa from './components/Tarefa';

function App() {
  const tarefas = [
    { titulo: 'Estudar React', status: 'pendente' },
    { titulo: 'Estudar JavaScript', status: 'pendente' },
    { titulo: 'Estudar HTML', status: 'pendente' },
    { titulo: 'Estudar CSS', status: 'pendente' },
  ];

  return (
    <div className="App">
      <h2>Cadastrar Tarefas</h2>
      <input type="text" placeholder="Adicionar nova tarefa" />
      <button className="adicionar-tarefa">Adicionar</button>

      <h2>Lista de Tarefas</h2>
      {
        tarefas.map((tarefa, index) => (
          <Tarefa key={index} tituloTarefa={tarefa.titulo} status={tarefa.status} />
        ))
      }
    </div>
  );
}

export default App;
