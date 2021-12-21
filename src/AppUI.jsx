import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { useContext } from "react";
import { TodoContext } from "./utils/TodoContext";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./modal/TodoForm";

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

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
    </div>
  );
}
