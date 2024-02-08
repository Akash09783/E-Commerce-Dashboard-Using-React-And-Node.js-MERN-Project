import React from "react";

import {Link} from 'react-router-dom'
const Nav = ()=>{
    return(
        <div className="nav-ul">
        <h1 style={{fontSize:"23px",fontFamily:"sans-serif",marginLeft:"6px"}}> E-DashBoard</h1>
            <ul  className="ab">
                <li><Link to='/' >Products</Link></li>
                <li><Link to='/add' >Add Product</Link></li>
                <li><Link to='/update' >Update Product</Link></li>
                <li><Link to='/profile' >Profile</Link></li>
                <li><Link to='/logout' >LogOut</Link></li>
               
            </ul>
        </div>
    )

}
export default Nav;