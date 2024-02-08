import React from "react";

import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const collectData = async () => {
    console.warn(name, email, password);
    let result =await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
 headers:{
  'content-Type':'application/json'
 },
    });
    result = await result.json()
    console.warn(result)
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <div
        className="container"
        style={{ alignItems: "center", marginLeft: "38%" }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          className="inputBox"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="inputBox"
          placeholder="Enter Email"
        />
        <input
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          type="password"
          className="inputBox"
          placeholder="Enter Password"
        />
        <button onClick={collectData} className="appButton">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default SignUp;
