import { createContext, useState } from "react";

export const TarefaContext = createContext();

export const TarefaProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Exemplo Tarefa Pendente", status: "pendente" },
    { id: 2, titulo: "Exemplo Tarefa Concluida", status: "concluida" },
  ]);

  const adicionarTarefa = (titulo) => {
    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      status: "pendente",
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  const deletarTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
  }

  const toggleStatusTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, status: tarefa.status === 'pendente' ? 'concluida' : 'pendente' };
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  }

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa, deletarTarefa, toggleStatusTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
}
