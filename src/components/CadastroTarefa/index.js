import { useState, useContext } from "react";
import { TarefaContext } from "../../context/TarefaContext";

const CadastroTarefa = () => {
  const [tituloNovaTarefa, setTituloNovaTarefa] = useState('');
  const { adicionarTarefa } = useContext(TarefaContext);


  const handleChange = (event) => {
    setTituloNovaTarefa(event.target.value);
  }

  const handleSubmit = () => {
    adicionarTarefa(tituloNovaTarefa);
    setTituloNovaTarefa('');
  }

  return (
    <div className="cadastro-tarefa">
      <h2>Cadastrar Tarefas</h2>
      <input type="text" placeholder="Adicionar nova tarefa" value={tituloNovaTarefa} onChange={handleChange} />
      <button className="adicionar-tarefa" onClick={handleSubmit}>Adicionar</button>
    </div>
  )
}

export default CadastroTarefa;
