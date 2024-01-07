import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return <>
    <Navbar/>
   
    
    <Routes>
      <Route  index element={<Homepage/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
    </Routes>


  </>;
}

export default App;
