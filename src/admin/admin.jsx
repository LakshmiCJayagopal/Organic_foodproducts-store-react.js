import React, { useContext, useState } from "react";
import './admin.css';
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { myContext } from "../pages/context";
import removeicon from "../assets/cart_cross_icon.png";
import { FaUserFriends } from "react-icons/fa";

const Admin = () => {
    const { products, setProducts } = useContext(myContext);
    

    const [newProduct, setNewProduct] = useState({
      id:'',
        name: '',
        category: '',
        price: '',
        image: '',
    });
    const [editIndex, setEditIndex] = useState(null);//edit

    const [showForm, setShowForm] = useState(false);
    const handleDeleteProduct = (productId) => {
      const deleteProducts = products.filter((product) => product.id !== productId);
      setProducts(deleteProducts);
      console.log(`Deleting product with ID: ${productId}`);
    };
  
  
    const handleChange = (e) => {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.image) {
        alert('Please fill in all the fields');
        return;
      }
      if (editIndex !== null) {
   
        const updatedProducts = products.map((product, index) =>
            index === editIndex ? newProduct : product
        );
        setProducts(updatedProducts);
        setEditIndex(null);
        alert('Product updated successfully');

    } else {
      // Generate a unique ID for the new product
      const newProductId = Date.now();
  
     
      const newProductData = {
        id: newProductId,
        name: newProduct.name,
        category: newProduct.category,
        price: newProduct.price,
        image: newProduct.image,
      };
  
      // Add the new product to the products list
      setProducts([...products, newProductData]);
      
      // Clear the form fields
      setNewProduct({
        id:'',
        name: '',
        category: '',
        price: '',
        image: '',
      });
      setShowForm(false);
      alert('Product added successfully');
    }
    };
    const editProduct = (index) => {
      const productToEdit = products[index];
      setNewProduct(productToEdit);
      setEditIndex(index);
      setShowForm(true);
  };
  
    return (
      <div className="addproductcontainer">
        <div className="home"><Link to={"/"}><IoHomeOutline></IoHomeOutline></Link></div>
        <div className="home"><Link to={"/adminuser"}><FaUserFriends /></Link></div>
        <button className="addpod"onClick={() => setShowForm(true)}>Add Products</button>
        {showForm && (
                <form className="panel" onSubmit={handleSubmit}>
                    <label className="labelproduct">
                        Id:
                        <input type="text" name="id" value={newProduct.id} onChange={handleChange} required />
                    </label>
                    <label className="labelproduct">
                        Name:
                        <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
                    </label>

                    <label className="labelproduct">
                        Category:
                        <input type="text" name="category" value={newProduct.category} onChange={handleChange} required />
                    </label>

                    <label className="labelproduct">
                        Price:
                        <input type="number" name="price" value={newProduct.price} onChange={handleChange} required />
                    </label>

                    <label className="labelproduct">
                        Image URL:
                        <input type="text" name="image" value={newProduct.image} onChange={handleChange} required />
                    </label>

                    <button type="submit" className="buttonsave">Save</button>
                </form>
            )}
             <hr />
             <h1>Product List</h1>
             <div className="listproductmain">
          <p>Image</p>
          <p>name</p>
          <p>Category</p>
          <p>New Price</p>
                  
      
        </div>
   
     
     <div className="listproductallproducts">
       
        {products.map((data,index) => {
          return (
            <div>
              <div className=" listproduct-format">
                <img className="listproduct-product-icon" src={data.image} alt="" />
                <p >{data.name}</p>
                <p>{data.category}</p>
                <p>{data.price}</p>
                <button className="editbutton"  onClick={() => editProduct(index)} >Edit</button>
                <img className="listproduct-remove-icon" onClick={() => handleDeleteProduct(data.id)} src={removeicon} alt="" />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
        </div>
    );
  };
export default Admin;