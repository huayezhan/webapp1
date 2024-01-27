/*
student name: huaye zhan
student ID: 301324797
date:2024/1/22
*/ 
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/logo.jpg'

export default function Layout() {
  return (
    <>
      <img src={logo}  height = "100px"/>
      <h1>Howard's Portfolio</h1>
      <nav>
        <Link to="/webapp1/home">Home</Link> | <Link to="/webapp1/about">About Me</Link> | <Link to="/webapp1/services">Services</Link> | <Link to="/webapp1/project">Project</Link> | <Link to="/webapp1/contact">Contact Me</Link> 
      </nav>
         <br/>
      <hr/>
      
    </>
    
  );
}
