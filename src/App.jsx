import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './Style.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Notfound from './Notfound';
import Topheader from './Topheader';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <div className='top-header'>
        <Topheader/>
      </div>
      <div className='headerf'>
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Notfound />} />
      </Routes>

      <Footer/>

    </>
  );
};

export default App;

