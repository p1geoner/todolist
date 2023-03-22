import React, { useState } from "react";
import AddLogo from "../images/addTodo.svg";

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (dateValue !== "") {
      if (timeValue !== "") {
        let [hours, mins] = timeValue.split(":");
        let [year, month, day] = dateValue.split("-");
        let fullDate =
          year + "/" + month + "/" + day + "/" + hours + "/" + mins;

        if (value.trim()) {
          onCreate(value, fullDate);

          setValue(" ");
        }
      } else {
        alert("Введите время!!!");
      }
    } else {
      alert("Введите дату и время!!!");
    }
  }

  return (
    <form className="addTodo" action="" onSubmit={submitHandler}>
      <div className="addTodo__container">
        <button className="addTodo__btn">
          <img src={AddLogo} alt="" />
        </button>
        <input
          className="addTodo__input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Add an event"
        />
      </div>
      <div className="addTodo__container">
        <input
          type="date"
          onChange={(event) => setDateValue(event.target.value)}
          required
        />
        <input
          type="time"
          onChange={(event) => setTimeValue(event.target.value)}
          required
        />
      </div>
    </form>
  );
};

export default AddTodo;
