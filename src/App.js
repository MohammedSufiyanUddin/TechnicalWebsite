import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Errore from './Components/Errore';
import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />

      {/* <div className="">
      
        
            <Link className="px-4" to="/">
              Home
            </Link>
            <Link className="px-4" to="/about">
              About
            </Link>
            <Link className="px-4" to="/service">
              Service
            </Link>
            <Link className="px-4" to="/contact">
              Contact
            </Link>
          
      </div> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Errore/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
