import React, { useContext } from "react";
import "./groceries.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { myContext } from "./context";
const Groceries=()=>{
    const { products } =useContext(myContext)
    const grocery= products.filter((e) => e.category === "grocery");
    const Navigate = useNavigate();
    return(
        <div>
  <div className="gh">
            <h1>GROCERIES</h1>
            </div>
            <div className="groceries">
            <div className=" grocerie " style={{ background: " rgb(230, 230, 217)" }}>
             {grocery.map((e)=>{
                return(
                    <div 
                    onClick={() => Navigate(`/Viewproduct/${e.id}`)}
                    className="groceri">
                      <div className="grocer">
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
                    </div>
                )
             })}  
</div>
          </div>
        </div>
    )
}
export default Groceries;