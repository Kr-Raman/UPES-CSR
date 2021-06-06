import React, { Component } from 'react';
import "./Navbar.css"
import logo from "./images/UPES-New-Logo.png"

class Navbar extends Component {
    render() {
        return (
            <div className="header">
        <div className="logo">
        <img src={logo} alt="logo"/>
        </div>
        <div className="heading">
            <ul>
                <li>HOME</li>
                <li>DISCOVER</li>
                <li>DISCRIPTION</li>
                <li>ABOUT US</li>
            </ul>
        </div>
    </div>
        );
    }
}

export default Navbar;