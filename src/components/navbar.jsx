import React, { useContext } from "react";
import "./navbar.css";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import logo from '../assets/ecolivelogo.webp';
import { Link } from "react-router-dom";
import { myContext } from "../pages/context";
import { RiAccountPinBoxFill } from "react-icons/ri";



const Navbar = () => {
    const { cart,login} = useContext(myContext);

    const getTotalCartItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
   
    return(
        <div>
       <header>
        <div className="navbar">
            <div className="navlogo">
            <img src={logo} alt="ECOLIVE"></img>
            <p>ECOLIVE</p>
      
            <ul>
            <li><Link style={{textDecoration:'none'}} to="/"> Home</Link> </li> 
            <li> <Link style={{textDecoration:'none'}}to ="/vegetables"> Vegetables</Link> </li> 
            <li><Link style={{textDecoration:'none'}} to="/fruits" > Fruits</Link> </li> 
            <li> <Link style={{textDecoration:'none'}}to="/groceries">  Groceries</Link> </li> 
            </ul>
           

        <ul>
        <li > <Link to="/search" className="search"><TbSearch /></Link></li>
            <li ><Link to={login===true ? "/userprofile" : "/register"} className="user">
             {login===true? <RiAccountPinBoxFill /> : <FaRegUser />} </Link> </li>
            <li ><Link to="/cart" className="cart"><IoCartOutline /></Link></li>
            <div className="navcartcount">{getTotalCartItems()}</div>       
            <li ><Link to="/adminlogin" className="admin"><RiAdminLine /></Link></li> 
                  
        </ul>
            </div>
      
        </div>
       </header>
    
        </div>
    );
};

export default Navbar;