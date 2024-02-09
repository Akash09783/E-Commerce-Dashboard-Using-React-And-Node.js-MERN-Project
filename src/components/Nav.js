import React from "react";

import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="nav-ul">
     <img className="imgs" src="https://th.bing.com/th/id/OIP.AUmzQMFBHWms_o8O5cgH0gHaGP?rs=1&pid=ImgDetMain" alt="logo" />
      { auth? <ul className="ab">
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
        <li><Link onClick={logout} to="/signup">LogOut({JSON.parse(auth).name}) </Link></li>
      </ul>
      :
      <ul>
      <li><Link style={{marginLeft:'1200px',}} to="/signup">SignUp</Link> </li>
            <li><Link  to="/login"> Login</Link></li> 
      </ul>
       } </div>
  );
};
export default Nav;
