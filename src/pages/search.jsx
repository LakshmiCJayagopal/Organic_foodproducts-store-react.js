import React, { useContext , useState} from 'react';
import { myContext } from './context';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./search.css"

const Search = () => {
    const { products } =useContext(myContext);
    const [searchQuery, setSearchQuery] = useState('');
    const Navigate = useNavigate();

    // Function to handle input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filtering logic based on searchQuery
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Product Search</h1>
            <input  className='searchh'
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <br></br>
            <hr />
             {filteredProducts.map((product, index) => (
            
              <div key={index}
              onClick={() => Navigate(`/Viewproduct/${product.id}`)}
                className="ourprod"
              >
                <Card style={{ maxwidth: "48rem" }} className="hovereffect">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Title>{product.category}</Card.Title>
                    <Card.Text>₹{product.price}</Card.Text>
                    <Card.Text>{product.Quantity}</Card.Text>
                  </Card.Body>
                </Card>{" "}
                </div>
            ))}
              </div>
            );
          }
            
            


export default Search;
