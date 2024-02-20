import React from "react";
import "../App.css";


export const TaskItem = (props) => {
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={props.submitTask}>
        <input
          type="text"
          value={props.item}
          className="textField"
          onChange={props.typeitem}
          placeholder="What's your task?"
        />
        <p>{props.item}</p>
        {/* Checking if we have an edit id, then show edit button otherwise create button */}
        {props.editId ?
          <button type="submit" className="buttonSave" >
            Update
          </button> :
          <button type="submit" className="buttonSave" >
            Create Task
          </button>
        }
      </form>
    </div>
  );
};
