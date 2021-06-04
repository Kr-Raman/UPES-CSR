import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div className="header">
        <div className="logo">
           <h1>UPES - CSR</h1>
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