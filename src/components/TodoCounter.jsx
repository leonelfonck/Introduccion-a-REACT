import './TodoCounter.css';
import { TodoContext } from '../utils/TodoContext';
import { useContext } from 'react';

function TodoCounter() {

  const {totalTodos,completedTodos} = useContext(TodoContext);


 

  return (
    <h2 className="TodoCounter">Has completado {totalTodos} de {completedTodos} TODO's</h2>
  );
}

export { TodoCounter };
