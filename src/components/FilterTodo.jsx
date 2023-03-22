import React, { useState } from "react";

const FilterTodo = ({ setTodo }) => {
  const radioId = [
    {
      id: 1,
      checked: true,
      title: "All",
    },
    {
      id: 2,
      checked: false,
      title: "In progress",
    },
    {
      id: 3,
      checked: false,
      title: "Completed",
    },
  ];

  localStorage.setItem("radio", JSON.stringify(radioId));

  function filterTodo(value, checked) {
    let todos = JSON.parse(window.localStorage.getItem("todos"));
    if (value === "1") {
      todos.map((todo) => {
        todo.visible = "true";

        return todos;
      });
    }
    if (value === "2") {
      todos.map((todo) => {
        if (todo.completed) {
          todo.visible = "false";
        } else {
          todo.visible = "true";
        }

        return todos;
      });
    }
    if (value === "3") {
      todos.map((todo) => {
        if (todo.completed) {
          todo.visible = "true";
        } else {
          todo.visible = "false";
        }

        return todos;
      });
    }
    setTodo(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="filterTodo">
      {radioId.map((item) => (
        <label className="custom-radio" key={item.id}>
          <input
            type="radio"
            name="FilterTodo"
            id={item.id}
            onChange={(e) => filterTodo(e.target.id, e.target.checked)}
            className="real-radio"
          />
          <p className="fake-radio">{item.title}</p>
        </label>
      ))}
    </div>
  );
};

export default FilterTodo;
