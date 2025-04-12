import './App.css';
import { useState } from 'react';
import ListaTarefas from './components/ListaTarefas';
import { TarefaContext } from './context/TarefaContext';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', status: 'pendente' },
    { id: 2, titulo: 'Estudar JavaScript', status: 'pendente' },
    { id: 3, titulo: 'Estudar HTML', status: 'pendente' },
    { id: 4, titulo: 'Estudar CSS', status: 'pendente' },
  ]);

  return (
    <div className="App">
      <h2>Cadastrar Tarefas</h2>
      <input type="text" placeholder="Adicionar nova tarefa" />
      <button className="adicionar-tarefa">Adicionar</button>

      <TarefaContext.Provider value={{ tarefas, setTarefas }}>
        <ListaTarefas />
      </TarefaContext.Provider>
    </div>
  );
}

export default App;
