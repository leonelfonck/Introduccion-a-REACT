import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { useContext } from "react";
import { TodoContext } from "./utils/TodoContext";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./modal/TodoForm";

//npm install --save-dev gh-pages //para subir a github pages
//,"homepage": "https://miguelito_feliz.github.io/introduccion" //agregar al package.json
//,"predeploy" : "npm run build" //para que se ejecute antes del deploy
//,"deploy": "gh-pages -d build" //agregar en los scripts
 //se ejecuta npm run deploy
 //git add -A
 //git commit -m "Deploy"
 //git push


export function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos
  } = useContext(TodoContext);

  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Huvo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && (completedTodos<1) && <p>Crea tu primer todo...</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
    </div>
  );
}
