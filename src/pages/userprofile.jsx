import React, { useContext } from 'react';
import { myContext } from './context';
import './userprofile.css'
import { useNavigate } from 'react-router-dom';

const Userprofile = () => {
    const { user,login,setLogin,setCart } = useContext(myContext);

    const navigate=useNavigate();
  
     const handleLogout = () => {
        if(login){
        setLogin(false);
        setCart([])

        alert('logged out successfully')
        }else{
          alert("please log in")
          navigate('/Login')
        }
      };
      if (!user) {
        return <div>No user data available</div>;}
   

    return (
        <div className='abcd'>
            <h1>User Profile</h1>
            {user.map((userdata, index) => (
                <div key={index}>
                     <p>Name: {userdata.name}</p>
                    <p>Email: {userdata.email}</p>
                    <p>Password: {userdata.password}</p>
                </div>
          
               
                
            ))}<div className='userlog'>
            <button  type="button">Orders</button>
            <button  type="button" onClick={handleLogout}>logout</button></div>
        </div>
    );
};

export default Userprofile;
