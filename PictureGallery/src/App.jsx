import { useState } from 'react';
import './App.css';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function App() {
  const [counter, setCounter]= useState(0);
  const [picture, setPicture]= useState([
    {url: "https://picsum.photos/id/237/200/300", name: "Picture-1"},
    {url: "https://picsum.photos/200/300?grayscale", name: "Picture-2"},
    {url: "https://picsum.photos/id/3/367/267", name: "Picture-3"},
    {url: "https://picsum.photos/id/23/367/267", name: "Picture-4"},
    {url: "https://picsum.photos/id/13/367/267", name: "Picture-5"},
    {url: "https://picsum.photos/id/25/367/267", name: "Picture-6"}
  ]);

  function counterDecrement(){
     if(counter<=0){
      setCounter(counter=0)
    }
    else{setCounter(counter-1)}
  }
  function counterIncrement(){
    if(counter < picture.length)
      setCounter(counter+1)
  }
  return (
    <>
      <div className='container'>
        <h1 className='heading'>Display Image</h1>
        <div className='innerContainer'>
          <button onClick={counterDecrement} className='counterBtn1'><FaMinus /></button>
          <p className='counterValue'>{counter}</p>
          <button onClick={counterIncrement} className='counterBtn2'><FaPlus /></button>
        </div>
        <div>
          <ul className='unorderedList'>
              {picture.map((pic, i) => (
                
                (i< counter)?
                  <li className='list'>
                  <img className='image' src={pic.url} alt={pic.name}/>
                  </li> : ""

              ))}
            </ul>
        </div>
      </div>  
    </>
  )
}

export default App
