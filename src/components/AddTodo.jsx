import React, { useState } from "react";

const AddTodo=({onCreate})=>{
    const[value,setValue]= useState('')
    function submitHandler(event)
    {
        event.preventDefault()
        if(value.trim())
        {
            onCreate(value)
            setValue(' ')
        }
    }
    return(
        <form className="addTodo" action="" onSubmit={submitHandler}>
            <input 
                className="addTodo__input" value={value} 
                onChange={event=>setValue(event.target.value)} 
                placeholder="Введите Todo"
            />
            <button className="addTodo__btn">Добавить Todo</button>
        </form>
    )
}
export default AddTodo;