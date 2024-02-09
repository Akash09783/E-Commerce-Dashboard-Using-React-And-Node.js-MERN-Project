import React from "react";

import { Link,useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/signup')

  }

  return (
    <div className="nav-ul">
      <h1
        style={{
          fontSize: "23px",
          fontFamily: "sans-serif",
          marginLeft: "6px",
        }}
      >
        {" "}
        E-DashBoard
      </h1>
      <ul className="ab">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
     
        <li>
          {auth ? (
            <Link onClick={logout} to="/signup">LogOut</Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
      </ul>
    </div>
  );
};
export default Nav;
