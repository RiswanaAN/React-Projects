import React, { useState } from "react";
import "./auth.css";
import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState();
  const navigate = useNavigate();
  function registerUser(e) {
    e.preventDefault();
    if (password == confPassword) {
      const user = {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      };
      let userDetail = JSON.stringify(user);
      window.localStorage.setItem("userDetail", userDetail);
      navigate("/");
      alert("User Registered Successfully");
    } else {
      alert("Check your password");
    }
  }

  return (
    <div className="mainContainer">
      <form onSubmit={registerUser}>
        <h2 className="heading">Register</h2>
        <div className="iconDiv">
          <FaRegUser />
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="iconDiv">
          <TfiEmail />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="iconDiv">
          <RiLockPasswordLine />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <RiLockPasswordLine />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="buttonLR">
          SIGNUP
        </button>
        <div className="registerLink">
          <p className="pTag">Already Registered</p>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
