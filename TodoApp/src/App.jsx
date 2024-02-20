import "./App.css";
import { useState } from "react";
import { TaskItem } from "./components/TaskItem";
import { TaskList } from "./components/TaskList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  //input field text
  const [item, setItem] = useState("");
  //array of task
  const [todos, setTodos] = useState([]);
  const [editId, setEditId]= useState(0);
  
  //display item below text field
  function typeitem(e) {
    setItem(e.target.value);
  }

  function submitTask(e) {
    e.preventDefault();
    addTodo();
  }
  //on add item to array
  function addTodo() {
    //checking field is empty or not
    if(item !== ""){
      setTodos([...todos, { text: item, id: uuidv4(), status: false }]);
      setItem("");
    }
    else{
      alert("Oops Its Empty!!!!");
    }
    //its for editing
    if(editId){
      const updatedTodo= todos.map((to)=> to.id=== editId ?
          (to= {id: to.id, text: item }):  (to= {id: to.id, text: to.text}));
      setTodos(updatedTodo);
      setEditId(0);
      setItem("");    
    }
  }
  //delete item
  function onDelete(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    
  }
  //check status completed or not
  function statusCheck(id) {
    const complete = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(complete);
  }
  // for editing then to add function
  function editTask(id) {
    const editTodo= todos.find((todo)=> todo.id=== id);
    setItem(editTodo.text);     
    setEditId(editTodo.id);
  }
 
  

  return (
    <>
      <div className="container">
        <TaskItem 
          item={item} 
          typeitem={typeitem} 
          submitTask={submitTask} 
          editId={editId}
          />

        <TaskList
          todos={todos}
          onDelete={onDelete}
          statusCheck={statusCheck}
          editTask={editTask}
        />
      </div>
    </>
  );
}

export default App;
