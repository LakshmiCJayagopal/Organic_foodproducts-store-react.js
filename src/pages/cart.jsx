import React, { useContext } from "react";
import "./cart.css";
import { myContext } from "./context";

import removeicon from "../assets/cart_cross_icon.png"
function Cart(){
    const {cart,setCart}=useContext(myContext);
  

    const removeFromCart = (id) => {

        const newItems = cart.filter((item) => item.id !==id);
        setCart(newItems);
      };
      const addQty = (id) => {
        const newQty = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newQty);
      };

      const removeQty = (id) => {
        const newQty = cart.map((item) =>
          item.id === id && item.quantity > 1 ? { ...item,quantity: item.quantity - 1 } : item
        );
        setCart(newQty);
      };

     
      const getTotalCartAmount = () => {
        return cart.reduce((total, item) => total + item.quantity * item.price, 0);
    };


    


    return(
        <div>
            <div className="cartt">
            <h1>CART</h1>
            </div>
        <div className="cartitemsformatmain">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
           
        </div>
        <hr />
        {cart.map((item) => (
            <div key={item.id}>
                <div className="cartitemsformatmain">
                    <img  className='carticonproducticon' src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <span className='cartitemsquantity'>{item.quantity}</span>
                    <p>₹{item.price * item.quantity}</p>
                    <div className="cartbutton">
                        <button   onClick={() => removeQty(item.id)}>Remove Qty</button>
                        <button   onClick={() => addQty(item.id)}>Add Qty</button>
                    </div>
                    <img
                        className='removeicon'
                        src={removeicon}
                        onClick={() => removeFromCart(item.id)}
                        alt=""
                    />
                </div>
            </div>
        ))}
      <div className="cartitemsdown">
  <div className="cartitemstotal">
  <h1>Cart Totals</h1>
   <div>
  <div className="cartitemstotalitem">
             <p>Subtotal</p>
             <p>₹{getTotalCartAmount()}</p>
   </div>
    <hr />
   <div className="cartitemstotalitem">
        <p>Shipping Fee</p>
         <p>Free</p>
    </div>
            <hr />
<div className="cartitemstotalitem">
         <h3>Total</h3>
         <h3>₹{getTotalCartAmount()}</h3>
 </div>

 </div>
 <button className="buttoncart"  >CHECKOUT</button>
   </div>
      </div>
    </div>
);
}

export default Cart;