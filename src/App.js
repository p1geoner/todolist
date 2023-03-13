import { useState } from 'react';
import AddTodo from './AddTodo';
import './App.css';
import TodoList from './TodoList';

function App() {
  function resetData (){
    const toDo=[
      ];
    localStorage.setItem('todos', JSON.stringify(toDo));
    setTodo(toDo)
  }
  
  const [todo,setTodo]=useState(JSON.parse(window.localStorage.getItem('todos')));
  
  function toggleTodo(id)
  {
    let todos=JSON.parse(window.localStorage.getItem('todos')) ;
    setTodo(
    todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed;

        
      }
      return todo;
    }))
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  function forRemoveCompletedTodo(){
    //костыль нереальный, но по другому не получилось(((, хз почему
    // просто функция removeCompletedTodo() удаляла половину сделанных тудушек
    for (let index = 0; index < 5; index++) {
      removeCompletedTodo();
      
    }
  }
  function removeCompletedTodo(){
    let todos=JSON.parse(window.localStorage.getItem('todos')) ;
    todos.map((todo,index)=>{
      if(todo.completed){
      todos.splice(index,1);

      }
      return todos;
    })
    setTodo(todos); 
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  function removeTodo(id){
    
    let todos=JSON.parse(window.localStorage.getItem('todos')) ;
    
    todos.map((todo,index)=>{
      if(todo.id===id){
      todos.splice(index,1);
      localStorage.setItem('todos', JSON.stringify(todos));
      }
      return todo;
    })
    setTodo(todos);
    
  }

  function addTodo(title){
    let todos=JSON.parse(window.localStorage.getItem('todos')) ;

      todos=todos.concat([
        { id:Date.now(),
          completed: false,
          title,
        }
      ])
    setTodo(todos)
    localStorage.setItem('todos', JSON.stringify(todos));
  } 
  return (
    <div className="App">
      <AddTodo onCreate={addTodo}/>
      { 
        JSON.parse(window.localStorage.getItem('todos')).length 
        ? 
        <TodoList removeTodo={removeTodo} onToggle={toggleTodo} todo={todo}/> 
        :
        <p className='app__notodo'>нет задач!!!</p>
      }
      <div className='app-btns'>
        <button className='app__btn' onClick={resetData}>Очистить туду лист</button>
        <button className='app__btn' onClick={forRemoveCompletedTodo}>Очистить выполненные задачи</button>
      </div>
      
    </div>
  );
}

export default App;
