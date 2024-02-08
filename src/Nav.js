import React from "react";
import './App.css'
import {Link} from 'react-router-dom'
const Nav = ()=>{
    return(
        <div className="nav-ul">
            <ul >
                <li><Link to='/' style={{textDecoration:"none",color:"black"}}>Products</Link></li>
                <li><Link to='/add' style={{textDecoration:"none",color:"black"}}>Add Product</Link></li>
                <li><Link to='/update' style={{textDecoration:"none",color:"black"}}>Update Product</Link></li>
                <li><Link to='/logout' style={{textDecoration:"none",color:"black"}}>LogOut</Link></li>
                <li><Link to='/profile' style={{textDecoration:"none",color:"black"}}>Profile</Link></li>
            </ul>
        </div>
    )

}
export default Nav;