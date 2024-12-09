import React, { useContext } from "react";
import "./Viewproduct.css";
import { Card, Button} from "react-bootstrap";

import { myContext } from "./context";
import { useNavigate, useParams } from "react-router-dom";
import Loginuser from "./login";





const Viewproduct=()=>{
  const{products,cart,setCart,login,setLogin}=useContext(myContext)
  const navigate=useNavigate();
    const{id}= useParams();
   
    const prod = products.filter((e) => e.id === parseInt(id));
    console.log(prod);
    
    
  const addTocart = (item) => {
   
   if(login === true){
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        alert('Product is already in the cart');
      } else {
        if(Loginuser){
        const updatedCart = [...cart, { ...item, quantity: 1 }];
        setCart(updatedCart);
        alert(`${item.name} successfully added to the cart!`);
        }else{
          navigate("/login")
        }
    } }else{
      alert("please login first")
      navigate("/login")
    }
     
  };
  return (
    <div className="proo">
      {prod.map((e) => (
        <div key={e.id} className="viewproduc">
          <Card className="proodu">
            <div className="viewpro">
              <Card.Img className="vieww" variant="top" src={e.image} />
              <Card.Body className="vie">
                <Card.Title className="vi">
                  <h2>{e.name}</h2>
                  <h5>{e.category}</h5>
                </Card.Title>
                <Card.Text className="vii">
                  <h3>₹{e.price}</h3>
                  <br />
                  <br />
                  <p className="ww">
                    Organic food products contain a variety of items,
                    including fruits and vegetables grown without synthetic
                    pesticides, herbicides, or fertilizers. Organic products
                    adhere to specific standards that vary by country but
                    generally include the exclusion of synthetic chemicals,
                    non-GMO ingredients.
                  </p>
                </Card.Text>
                <Button
                  className="view"
                  onClick={() => {
                    addTocart(e);
                  }}
                  variant="primary"
                >
                  ADD TO CART
                </Button>
              </Card.Body>
            </div>
          </Card>
          
        </div>
      ))}
    </div>
  );
};

export default Viewproduct;