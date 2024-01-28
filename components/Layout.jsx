import React from 'react'
import {Link} from 'react-router-dom'
import '../src/App.css';
import logo from '../src/assets/logo.png'

export default function Layout() {
    return (
        <>
            <header className="header">
            <a href="/">
            <img src={logo} alt="Logo" className="logo" />
            </a>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </>
    );
}