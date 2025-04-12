import './App.css';
import ListaTarefas from './components/ListaTarefas';
import { TarefaProvider } from './context/TarefaContext';

function App() {
  return (
    <div className="App">
      <h2>Cadastrar Tarefas</h2>
      <input type="text" placeholder="Adicionar nova tarefa" />
      <button className="adicionar-tarefa">Adicionar</button>

      <TarefaProvider>
        <ListaTarefas />
      </TarefaProvider>
    </div>
  );
}

export default App;
