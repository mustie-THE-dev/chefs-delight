import React from "react";
import { Routes,Route,} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      
      <NavBar />
      <Routes>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/" element={<Home/>}/>
      </Routes>
    
    </div>
  );
}

export default App;