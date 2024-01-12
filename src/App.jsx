import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
import Homepage from "./components/homepage/Homepage";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return <>
    <Navbar/>
   
    
    <Routes>
      <Route  index element={<Homepage/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/" element={<Homepage/>} ></Route>
      <Route path="/menu" element={<Menu/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
    </Routes>
      

  </>;
}

export default App;
