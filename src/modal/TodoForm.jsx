import { useContext, useState } from "react";
import { TodoContext } from "../utils/TodoContext";
import "./todoForm.css"

export function TodoForm(){

const [newTodoValue,setNewTodoValue]=useState('');

    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

const onCancel = () =>{
 setOpenModal(false);
};

const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Ingresa el TODO"
            />
            <div className="botones">
                <button
                type="button"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}