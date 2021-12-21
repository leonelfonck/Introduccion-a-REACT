import React from 'react';
import './TodoItem.css';
import { RiCheckboxCircleFill,RiDeleteBin6Line } from 'react-icons/ri';


export function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        <RiCheckboxCircleFill size={25}/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        <RiDeleteBin6Line size={25} />
      </span>
    </li>
  );
}
