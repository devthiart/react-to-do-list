import './App.css';
import CadastroTarefa from './components/CadastroTarefa';
import ListaTarefas from './components/ListaTarefas';
import { TarefaProvider } from './context/TarefaContext';

function App() {
  return (
    <div className="App">
      <TarefaProvider>
        <CadastroTarefa />
        <ListaTarefas />
      </TarefaProvider>
    </div>
  );
}

export default App;
