import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

    return (
      
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><NavLink to="/">Multi</NavLink></h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                        
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">AboutUs</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#testimonials">Testimonial</a></li>
                            
                           
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
     
    )
}
