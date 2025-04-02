import { useState, useEffect } from 'react';

const Tarefa = ({tituloTarefa}) => {
  const [status, setStatus] = useState('pendente');

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setStatus(isChecked ? 'concluida' : 'pendente');
  }
  
  return (
    <li>
      <div className={"tarefa " + status}>
        <input type="checkbox" onChange={handleChange} />
        <span>{tituloTarefa}</span>
        <button className="delete">Deletar</button>
      </div>
    </li>
  )
}

export default Tarefa;
