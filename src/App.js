import { useState } from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import Buttons from './components/Buttons';
import TodoRender from './components/TodoRender';
function App() {
    const [todo, setTodo]=useState(JSON.parse(window.localStorage.getItem('todos')));

    function addTodo(title) {
      let todos=JSON.parse(window.localStorage.getItem('todos'))

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

    function removeTodo(id) {
        let todos=JSON.parse(window.localStorage.getItem('todos'))

        todos.map((todo,index)=>{
                if(todo.id===id) {
                  todos.splice(index,1);
                  localStorage.setItem('todos', JSON.stringify(todos))
                }
                return todo;
            }
        )

        setTodo(todos);
    }

    function toggleTodo(id) {
        let todos=JSON.parse(window.localStorage.getItem('todos'))
      
        setTodo(
                    todos.map(todo=>{
                        if(todo.id===id) {
                            todo.completed = !todo.completed 
                        }
                        return todo
                    })
                )

        localStorage.setItem('todos', JSON.stringify(todos));
    }

    if(JSON.parse(window.localStorage.getItem('todos'))===null){
      const toDo=[]
      
      localStorage.setItem('todos', JSON.stringify(toDo))

      setTodo(toDo);
    }

    return (
      <div className="App">
        <AddTodo onCreate={addTodo}/>
        <TodoRender 
          setTodo={setTodo}
          todo={todo} 
          toggleTodo={toggleTodo} 
          removeTodo={removeTodo}
        />
        <Buttons setTodo={setTodo} />
      </div>
    );
}

export default App;
