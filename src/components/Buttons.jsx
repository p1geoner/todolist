import React from "react";
const Buttons =({setTodo})=>{
    function clearData ()
        {
            const toDo=[];
            localStorage.setItem('todos', JSON.stringify(toDo));
            setTodo(toDo);
        }
    function removeCompletedTodo()
    {
        for (let index = 0; index < 5; index++) 
        {
            let todos=JSON.parse(window.localStorage.getItem('todos')) ;
            todos.map((todo,index)=>
            {
                if(todo.completed)
                {
                    todos.splice(index,1);
                }
                return todos;
            }
            )
            setTodo(todos); 
            localStorage.setItem('todos', JSON.stringify(todos));
        }  
    }
    return(
        <div className='app-btns'>
            <button className='app__btn' onClick={clearData}>Очистить туду лист</button>
            <button className='app__btn' onClick={removeCompletedTodo}>Очистить выполненные задачи</button>
        </div>
    );
    
}
export default Buttons;