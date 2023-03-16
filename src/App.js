import { useState } from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import Buttons from './components/Buttons';
import TodoRender from './components/TodoRender';
function App() 
  {
    const [todo,setTodo]=useState(JSON.parse(window.localStorage.getItem('todos')));

    function addTodo(title)
    {
      let todos=JSON.parse(window.localStorage.getItem('todos')) ;

        todos=todos.concat(
          [
            { 
              id:Date.now(),
              completed: false,
              title,
            }
          ]
        )
      setTodo(todos)
      localStorage.setItem('todos', JSON.stringify(todos));
    } 
    return (
      <div className="App">
        <AddTodo onCreate={addTodo}/>
        <TodoRender setTodo={setTodo}todo={todo}/>
        <Buttons setTodo={setTodo} />
      </div>
    );
}

export default App;
