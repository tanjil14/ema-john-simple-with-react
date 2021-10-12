import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2 className="login-title">Login</h2>
        <form onSubmit="">
          <input type="email" placeholder="enter your email" />
          <br />
          <input type="password" placeholder="enter your password" />
          <br />
          <input className="login-btn" type="submit" value="Login" />
        </form>
        <p>
          New to ema-jon?<Link to="/register">Create Account</Link>
        </p>
        <div>
          ---------------or--------------
          <br />
          <button onClick={signInUsingGoogle} className="btn-regular">
            Google Sign-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
