import React, { useState } from "react";
import "./auth.css";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const navigate= useNavigate()
  function loginUser(e) {
    e.preventDefault()
    let details= localStorage.getItem("userDetail");
    let userDetails= JSON.parse(details);
    if(name== userDetails.name && password== userDetails.password){
      navigate('/musicplayer');
    }
    else{
      alert("Check your username & password");
    }
  }
  return (
    <div className="mainContainer">
      <form className="loginForm" onSubmit={loginUser}>
        <div className="loginIcon">
          <FaRegUser />
        </div>
        <input type="text" placeholder="Username" required onChange={(e)=> setName(e.target.value)}></input>
        <input type="password" placeholder="Password" required onChange={(e)=> setPassword(e.target.value)}></input>
        <button type="submit" className="buttonLR">
          LOGIN
        </button>
        <div className="registerLink">
          <p className="pTag">Not signup</p>
          <Link to="/register">Click Here</Link>
        </div>
         
        <hr></hr>
        <div style={{marginTop:"15px", marginLeft:"10px"}}>
          <GoogleAuth />
        </div>
      </form>
    </div>
  );
}

export default Login;
