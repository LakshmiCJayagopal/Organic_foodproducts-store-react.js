
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer';
import Faq from "./pages/faq";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Groceries from './pages/groceries';
import Fruits from"./pages/fruits";
import Vegetables from './pages/vegetables';
import Register from './pages/register';
import Loginuser from './pages/login';
import { useState } from 'react';
import { myContext } from './pages/context';
import allproducts from './allproducts';
import Viewproduct from './pages/Viewproduct';
import Cart from './pages/cart';
import Adminlogin from './admin/adminlogin';
import Admin from './admin/admin';
// import Addproducts from './admin/addproducts';
import Search from './pages/search';
import Adminusers from './admin/adminuser';
import Userprofile from './pages/userprofile';


function App() {
  const [user, setUser] = useState([]);

const[ login,setLogin]=useState(false);
const [cart,setCart]=useState([])
const [products,setProducts]=useState(allproducts)



  return (
    <div ><BrowserRouter>
    <myContext.Provider value={{ user, setUser ,login,setLogin,products,setProducts, cart,setCart}}>
    <Navbar/>
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/fruits" element={<Fruits />} />
  <Route path="/vegetables" element={<Vegetables />} />
  <Route path="/groceries" element={<Groceries />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Loginuser />} />
  <Route path="/Viewproduct/:id" element={<Viewproduct />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/search" element={<Search/>} />
  <Route path="/adminlogin" element={<Adminlogin />} />
  <Route path="/admin" element={<Admin/>} />
  <Route path="/adminuser" element={<Adminusers/>} />
  <Route path="/userprofile" element={<Userprofile/>} />
  {/* <Route path="/addproducts" element={<Addproducts/>} /> */}

    </Routes>
    </myContext.Provider>
    <Footer/>
    </BrowserRouter>
  
  </div>
  );
}

export default App;
