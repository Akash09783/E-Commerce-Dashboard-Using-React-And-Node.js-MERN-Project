import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
        navigate("/")
    }
  },)




  const handleLogin = async () => {
    console.warn("email,password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result))
   navigate("/")
    } else {
      alert("please enter correct detail");
    }
  };
  return (
    <div className="login" style={{ alignItems: "center", marginLeft: "38%" }}>
      <div>
        {" "}
        <h1
          style={{
            textAlign: "center",
            marginRight: "32%",
            fontFamily: "sans-serif",
            fontStyle: "italic",
          }}
        >
          E-DashBoard Login
        </h1>
      </div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="inputBox"
        placeholder="Enter Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="inputBox"
        placeholder="Enter Password"
      />
      <button onClick={handleLogin} type="button" className="appButton">
        Login
      </button>
    </div>
  );
};

export default Login;
