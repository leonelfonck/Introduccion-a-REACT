import React from 'react';
import './CreateTodoButton.css';
import { RiAddCircleFill } from 'react-icons/ri';

function CreateTodoButton({setOpenModal}) {
 
  const onClickButton=()=>{
    setOpenModal(prevState => !prevState);
  }
 
  return (
    <button 
    className="CreateTodoButton"
    onClick={()=>onClickButton()}
    >
      <RiAddCircleFill 
          size={30} 
          color="#38c7ad"/>
    </button>
  );
}

export { CreateTodoButton };