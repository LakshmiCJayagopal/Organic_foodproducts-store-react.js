import React, { useContext } from "react";
import "./home.css";
import refund from'../assets/refund.png';
import truck from'../assets/truck.png';
import support from'../assets/support.png';
import cash from'../assets/cash.png';
import c1 from '../assets/navbar1.jpg';
import c2 from "../assets/sideimg.jpg";
import fruits from"../assets/fruitss.jpg";
import vege from "../assets/vege.jpg";
import groceries from "../assets/Groceries.jpg";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { myContext } from "./context";

const Home = () => {
  const{products}=useContext(myContext)
  const Navigate = useNavigate();
    return(
        <div>
            <div className="con">
            <img src={c1} alt=""></img>
            <p>Fresh local produce</p>
            <p>100% Organic</p>
           <Link to="/search"> <button type="button">shop now</button></Link>
            </div>
            <div className="aa">
              <img src={c2} alt="c2"></img>
              <p>Organic food contains no artificial colors,flavours or preservatives<br></br>
              <br></br>
             There are better nutrient profiles in organic food vs conventional<br></br>
             <br></br>
           Eating organic foods reduces the amount of chemicals in your diet,particularly pesticides and hesbicides</p>
            </div>
            <div className="ab">
            <img src={fruits} alt="" />
        <Link to="/fruits" style={{textDecoration:'none'}}>  <h5>Fruits</h5></Link>
            </div>
            <div className="ac">
            <img src={vege} alt="" />
            <Link to="/vegetables"style={{textDecoration:'none'}}><h5>Vegetables</h5></Link>
            </div>
            <div className="ad">
            <img src={groceries} alt="" />
            <Link to="/groceries"style={{textDecoration:'none'}}> <h5>Groceries</h5></Link>
            </div>
            <div>
              <h1>Our Products</h1>
            </div>
            {products.map((e) => {
            return (
              <div
                onClick={() => Navigate(`/Viewproduct/${e.id}`)}
                className="ourprod"
              >
                <Card style={{ maxwidth: "48rem" }} className="hovereffect">
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Title>{e.category}</Card.Title>
                    <Card.Text>₹{e.price}</Card.Text>
                    <Card.Text>{e.Quantity}</Card.Text>
                  </Card.Body>
                </Card>{" "}
              </div>
            );
          })}
            <div className='newsletter'>
  <h1>Get Exclusive Offers On Your Email</h1>
     <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
        <div className="support">
        <div className="support-item">
          <img src={truck} alt="Free shipping" />
          <h5>Free shipping</h5>
        </div>
        <div className="support-item">
          <img src={cash} alt="Cash On Delivery" />
          <h5>Cash On Delivery</h5>
        </div>
        <div className="support-item">
          <img src={refund} alt="Money back guarantee" />
          <h5>Money back guarantee</h5>
        </div>
        <div className="support-item">
          <img src={support} alt="Help & Support" />
          <h5>Help & Support</h5>
        </div>
      </div>
      </div>
    )
};

export default Home;