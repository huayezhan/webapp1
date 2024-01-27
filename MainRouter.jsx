/*
student name: huaye zhan
student ID: 301324797
date:2024/1/22
*/ 
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Project from './src/project'
import Layout from './components/layout'

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        
                        <Route exact path="/webapp1/home" element={<Home />} />
                        <Route exact path="/webapp1/about" element={<About />} />
                        <Route exact path="/webapp1/services" element={<Services />} />
                        <Route exact path="/webapp1/project" element={<Project />} />
                        <Route exact path="/webapp1/contact" element={<Contact />} />
                        
                </Routes>
        </div>
        )
}
export default MainRouter
