import React from "react";
const TodoItem= ({todos,id, onChange, removeTodo})=>{
    const classes = [];
    if(todos.completed)
    {
        classes.push('done')
    }

    return(
        <li>
            <div className="todoitem__container">
                <input 
                    checked={todos.completed} 
                    type="checkbox"
                    onChange={()=>onChange(todos.id)}
                />
                <p className={classes.join(' ')}>
                    <span className="todoitem__index">
                        {id+1}
                    </span>
                    {todos.title}
                </p>
            </div>
            
               
            <button className="todoitem__btn" onClick={()=>removeTodo(todos.id)}>&times;</button>
        </li>
    );
}
export default TodoItem;
