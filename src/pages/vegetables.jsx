import React, { useContext } from "react";
import "./vegetables.css";
import { myContext } from "./context";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const Vegetables=()=>{
    const { products } =useContext(myContext)
    const vegetables= products.filter((e) => e.category === "Vegetables");
    const Navigate = useNavigate();
    return(
        <div>
  <div className="vh">
            <h1>VEGETABLES</h1>
            </div>

            <div className="veget">
            <div className=" ve " style={{ background: " rgb(230, 230, 217)" }}>
             {vegetables.map((e)=>{
                return(
                    <div 
                    onClick={() => Navigate(`/Viewproduct/${e.id}`)}
                    className="veg">
                      <div className="cardi">
                    <Card  style={{ maxwidth: "48rem" }} className="hovereffect">
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
export default Vegetables;