import { useContext } from 'react';
import { TodoContext } from '../utils/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const {searchValue, setSearchValue} = useContext(TodoContext);

  function onSearchValueChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <input 
    className="TodoSearch" 
    placeholder="Filtrar" 
    value={searchValue}
    onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };