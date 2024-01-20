import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/logo.jpg'

export default function Layout() {
  return (
    <>
      <img src={logo}  height = "100px"/>
      <h1>Howard's Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact Me</Link> 
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}
