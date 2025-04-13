import { useState, useContext } from "react";
import { TarefaContext } from "../../context/TarefaContext";

const CadastroTarefa = () => {
  const [tituloNovaTarefa, setTituloNovaTarefa] = useState('');
  const { adicionarTarefa } = useContext(TarefaContext);


  const handleChange = (event) => {
    setTituloNovaTarefa(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(tituloNovaTarefa !== '') {
      adicionarTarefa(tituloNovaTarefa);
      setTituloNovaTarefa('');
    } else {
      alert('Tarefas devem ter um nome');
    }
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  return (
    <form className="cadastro-tarefa" onKeyDown={handleKeyDown}>
      {/* Label associada ao campo de texto por acessibilidade.*/}
      <label hidden htmlFor="cadastro-tarefa__texto">
        Cadastrar nova tarefa:
      </label>
      <input className="cadastro-tarefa__input" type="text" placeholder="O que você gostaria de fazer?" value={tituloNovaTarefa} onChange={handleChange} />
      <button className="cadastro-tarefa__enviar" type="submit" onClick={handleSubmit}>Adicionar</button>
    </form>
  )
}

export default CadastroTarefa;
