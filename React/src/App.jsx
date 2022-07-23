import React, {useState} from 'react';
import JsBasics from './components/JsBasics'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/templates/AddTask'

function App() {
  //Create 
  const [todos, setTodos] = useState([ 
    {
      id: 1,
      title: "delectus aut autem",
      completed: false
    },

    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true
    },

    {
      id: 3,
      title: "fugiat veniam minus",
      completed : false
    },
]);

const onFuncClick = (e) => {
  console.log(e, "clicked")
}

  //Read 


  //Update 
  const toggleReminder = (id) => {
    setTodos(
      todos.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.completed}: todo)
    )
  }

  //Delete 
  const onFuncDelete = (id) => {
    setTodos(todos.filter((todo)=>(todo.id !== id)));
  }

  //  JSX Of top most level component 

  return (     
    <div className = "container">

        <JsBasics/>

        <h6>Hello from Ugege Daniel</h6>
        <AddTask />
        <Header 
        title = "Task Tracker Project"
        onPropClick = {onFuncClick}
        />

        {
          /***
           * have something to show if there are no more items in the todos array
           */
        }
        <Tasks
        todos = {todos} 
        onPropDelete={onFuncDelete}
        toggleProp={toggleReminder}
        />
 
    </div>
  )
}

export default App