import React from "react";
import dateLogo from "../images/date.svg";
import deleteLogo from "../images/delete.svg"
const TodoItem= ({ todos,id, onChange, removeTodo })=>{
    const classes = ['todoitem__text'];
    if(todos.completed) {
        classes.push('done')
    }

    let[year,month,day,hours,mins]= todos.date.split('/');
    let date = new Date(year,month-1,day,hours,mins);
    let now = new Date()
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const classes_date=['date__text'];

    if(date.getTime()<now.getTime()){
        
        classes_date.push('red')
    }

    return(
        <li>
            <div className="todoitem">
                <div className="todoitem__container">
                    <input 
                        checked={todos.completed} 
                        type="checkbox"
                        onChange={()=>onChange(todos.id)}
                    />
                    <div className="todootem__text-container">
                        <p className={classes.join(' ')}>
                            {todos.title}
                        </p>
                        <p className={classes_date.join(' ')}>
                            <img src={dateLogo} alt="" />
                            {hours}:{mins}, {days[date.getDay()]}, {day}, {month}, {year}
                        </p>
                    </div>
                </div>
                <button className="todoitem__btn" onClick={()=>removeTodo(todos.id)}>
                    <img src={deleteLogo} alt="" />
                </button>
            </div> 
        </li>
    );
}
export default TodoItem;
