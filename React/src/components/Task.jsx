import React from 'react';

import {FaTimes} from 'react-icons/fa'

const Task = ({todo, onPropDelete1, toggleProp1}) => {

 const done = todo.completed ? "palegreen" : "tomato";

 const doneText = todo.completed ? "completed" : "yet to be completed";

  return (
    <div 
    className={`task ${todo.completed ? "reminder" : ""}`}
    onDoubleClick = {() => toggleProp1(todo.id)}
    >
        <h3>
            {todo.title}
        </h3>
        <div style={{backgroundColor:done, width:"200px", borderRadius:"5px", margin:"10px 0", padding:"3px"}}>
            {doneText}
        </div>
        <FaTimes 
        style={{color:"red", cursor:"pointer"}} 
        onClick={ () => onPropDelete1(todo.id) }
        />
 
    </div>
  )
}

export default Task