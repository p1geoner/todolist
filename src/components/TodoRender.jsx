import React from "react";
import TodoList from "./TodoList";
const TodoRender= ({ todo, toggleTodo, removeTodo })=> {
    
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