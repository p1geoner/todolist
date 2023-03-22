import React from "react";
import dateLogo from "../images/date.svg";

const TodoItem = ({ todos, onChange, removeTodo }) => {
  const classes = ["todoitem__text"];
  const classes_block = ["todo-li"];
  if (todos.completed) {
    classes.push("done");
  }
  if (todos.visible === "false") {
    classes_block.push("non-visible");
  }

  let [year, month, day, hours, mins] = todos.date.split("/");
  let date = new Date(year, month - 1, day, hours, mins);
  let now = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const classes_date = ["date__text"];

  if (date.getTime() < now.getTime()) {
    classes_date.push("red");
  }

  return (
    <li className={classes_block.join(" ")}>
      <div className="todoitem">
        <div className="todoitem__container">
          <label className="">
            <input
              className="real-check"
              checked={todos.completed}
              type="checkbox"
              onChange={() => onChange(todos.id)}
            />
            <span className="custom-check"> </span>
          </label>

          <div className="todootem__text-container">
            <p className={classes.join(" ")}>{todos.title}</p>
            <p className={classes_date.join(" ")}>
              <img src={dateLogo} alt="" />
              {hours}:{mins}, {days[date.getDay()]}, {day}, {month}, {year}
            </p>
          </div>
        </div>
        <button
          className="todoitem__btn"
          onClick={() => removeTodo(todos.id)}></button>
      </div>
    </li>
  );
};

export default TodoItem;
