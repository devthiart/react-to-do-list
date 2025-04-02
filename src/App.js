import './App.css';
import ListaTarefas from './components/ListaTarefas';

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

      <ListaTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
