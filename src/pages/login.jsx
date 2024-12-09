import React, { useContext, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { myContext } from "./context";
import { Link } from "react-router-dom";



const Loginuser=()=>{
    const {user,login,setLogin  } = useContext(myContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
   
    function Loginbtn(e) {
        e.preventDefault();
        const loggedUser = user.find((userdata) => userdata.email === email && userdata.password === password)
    
        if (loggedUser

        ) {
            // setLoguser([loggedUser])
            alert("login successful!!");
            setLogin(true)

            nav('/')
            
        }
        else {
            alert("invalid email or password !");
        }
    }

  
    return(
       
        <div className='lo'>
            <h1 className='h2'>USER LOGIN </h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='text' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}   />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type='password' id="pswd" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div >
                    <button className='Buttonstyle' type='submit'  onClick={Loginbtn}>LOGIN</button>
                </div>
            </form>

            <p className="loginuser">Create an account?<span><Link to='/register'>Register here </Link></span></p>  
        </div>
    )
}
export default Loginuser;