import React from "react";
import "../App.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


export const TaskList = (props) => {
  return (
    <>
      <ul>
        {props.todos.map((item) => (
          <li
            key={item.id}
            className="listItems"
            id={item.status ? "listStatusStyle" : ""}
          >
            {item.text}
            <div>
              <button
                className="statusCheck"
                onClick={() => props.statusCheck(item.id)}>
                <IoCheckmarkDoneSharp className="icon" />
              </button>
              <button 
                type="button" 
                className="buttonEdit"
                onClick={()=> props.editTask(item.id)}>
                <FaRegEdit className="icon"/>
              </button>
              <button
                type="button"
                className="buttonDelete"
                onClick={() => props.onDelete(item.id)}
              >
                <RiDeleteBin5Fill className="icon"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
