import { useState } from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoRender from "./components/TodoRender";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import FilterTodo from "./components/FilterTodo";
function App() {
  const [todo, setTodo] = useState(
    JSON.parse(window.localStorage.getItem("todos")),
  );

  function addTodo(title, date) {
    let todos = JSON.parse(window.localStorage.getItem("todos"));

    todos = todos.concat([
      {
        id: Date.now(),
        completed: false,
        visible: false,
        title,
        date,
      },
    ]);

    setTodo(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function removeTodo(id) {
    let todos = JSON.parse(window.localStorage.getItem("todos"));

    todos.map((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      return todo;
    });

    setTodo(todos);
  }

  function toggleTodo(id) {
    let todos = JSON.parse(window.localStorage.getItem("todos"));

    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  if (JSON.parse(window.localStorage.getItem("todos")) === null) {
    const toDo = [];

    localStorage.setItem("todos", JSON.stringify(toDo));

    setTodo(toDo);
  }

  return (
    <div className="App">
      <Header />
      <FilterTodo setTodo={setTodo} />
      <TodoRender
        setTodo={setTodo}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
      {/* <Buttons setTodo={setTodo} /> */}
      <AddTodo onCreate={addTodo} />
    </div>
  );
}

export default App;
