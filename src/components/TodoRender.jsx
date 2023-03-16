import React from "react";
import TodoList from "./TodoList";
const TodoRender= ({setTodo,todo})=>{
    function removeTodo(id)
    {
        let todos=JSON.parse(window.localStorage.getItem('todos')) ;
        
        todos.map((todo,index)=>
            {
                if(todo.id===id)
                {
                    todos.splice(index,1);
                    localStorage.setItem('todos', JSON.stringify(todos));
                }
                return todo;
            }
        )
        setTodo(todos);
    }
    function toggleTodo(id)
    {
        let todos=JSON.parse(window.localStorage.getItem('todos'))
        setTodo(
                    todos.map(todo=>
                    {
                        if(todo.id===id)
                        {
                            todo.completed = !todo.completed; 
                        }
                        return todo;
                    })
                )
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    return(
        <div>
            { 
                JSON.parse(window.localStorage.getItem('todos')).length 
                ? 
                <TodoList removeTodo={removeTodo} onToggle={toggleTodo} todo={todo}/> 
                :
                <p className='app__notodo'>нет задач!!!</p>
            }
        </div>
    );
};
export default TodoRender;