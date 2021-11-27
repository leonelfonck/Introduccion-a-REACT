import { TodoProvider} from "./utils/TodoContext";
import "./App.css";
import { AppUI } from "./AppUI.jsx";

export function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}
