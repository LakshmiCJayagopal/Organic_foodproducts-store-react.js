import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { myContext } from "./context";

const Register = () => {
    const { user, setUser } = useContext(myContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    
    const nav = useNavigate();

    const Alreadyregistered = () => {
        return user.find((data) => data.email === email);
    };

    const Handlebuttonclick = (e) => {
        e.preventDefault();
        
       
        if (!name || !email || !password || !number) {
            alert("Please fill in all fields.");
            return;
        }

        if (Alreadyregistered()) {
            alert("User is already registered, please enter a different email.");
            return;
        }

        const userData = { name, email, number, password };
        setUser([...user, userData]);
        alert("User registered successfully!!");
        nav("/login");
        console.log("User data:", user);
    }

    return (
        <div className="reg">
            <form onSubmit={Handlebuttonclick}>
                <h2 className='h2'>USER REGISTER</h2>
                <br /><br />
                <label>NAME:</label>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label>Email:</label>
                <input type="email" placeholder="email" id="em" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Phone no:</label>
                <input type="number" placeholder="number" id="num" value={number} onChange={(e) => setNumber(e.target.value)} /><br />
                <label>New password:</label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">Register</button>
            </form>
            <p className="loginsignuplogin">Already have an account?<span><Link to='/login'>Login here</Link></span></p>
        </div>
    )
}

export default Register;
