import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";  
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
    </Router>
  );
};

export default App;