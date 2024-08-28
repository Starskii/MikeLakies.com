import React from "react";
import "./LoginBox.css";

export default function LoginBox() {
  return (
    <div className="LoginBox">
      <div className="EmailInput">
        <label>Email:</label>
        <input type="email"></input>
      </div>
      <div className="PasswordInput">
        <label>Password:</label>
        <input type="password"></input>
      </div>
      <button className="LoginButton">Login</button>
    </div>
  );
}
