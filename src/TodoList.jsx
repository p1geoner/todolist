import React from "react";
import TodoItem from "./TodoItem";
const TodoList= (props)=>{
    return(
        <ul className="todolist">
            {props.todo.map((todo,index)=>(<TodoItem todos={todo} id={index} key={todo.id} removeTodo={props.removeTodo} onChange={props.onToggle}></TodoItem>))}
        </ul>
    )
}
export default TodoList;
