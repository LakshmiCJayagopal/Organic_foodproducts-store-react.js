import React, { useContext } from "react";
import "./fruits.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { myContext } from "./context";

const Fruits=()=>{
    const { products } =useContext(myContext)
    const Fruits= products.filter((e) => e.category === "Fruits");
    const Navigate = useNavigate();
    return(
        <div>
            <div className="fh">
            <h1>FRUITS</h1>
            </div>


            <div className="fruits">
            <div className=" fruit " style={{ background: " rgb(230, 230, 217)" }}>
             {Fruits.map((e)=>{
                return(
                    <div 
                    onClick={() => Navigate(`/Viewproduct/${e.id}`)}
                    className="frui">
                      <div className="fru">
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
export default Fruits;