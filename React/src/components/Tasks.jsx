import React from 'react';
import Task from './Task'

const Tasks = ({todos, onPropDelete, toggleProp}) => {


  return (
    <div>
        {todos.map((todo, index) =>(
            <Task key={index} todo={todo} onPropDelete1 ={onPropDelete}
            toggleProp1 = {toggleProp}/>
        ))}
    </div>
  )
}

export default Tasks