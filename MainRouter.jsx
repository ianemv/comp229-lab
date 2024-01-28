import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './src/about';
import Layout from './components/Layout';
import Education from './src/education';
import Project from './src/project';
import Contact from './src/contact';
import Services from './src/services';
import Footer from './components/Footer';
import './src/App.css'

const MainRouter = () => {
    return (
        <>
            <Layout/>
                <div className="main-body">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/education" element={<Education/>}/>
                    <Route exact path="/project" element={<Project/>}/>
                    <Route exact path="/services" element={<Services/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                </Routes>
                </div>
            <Footer/>
        </>

    );
};

export default MainRouter;