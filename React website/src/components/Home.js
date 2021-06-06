import React, { Component } from 'react';
import Navbar from "./Navbar"
import LandingSearch from './LandingSearch.js';
import ComparePage from './LandingCompare.js'
import CSRProjects from "./CSRProjects"
import Footer from "./footer"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <LandingSearch />
                <ComparePage/>
                <CSRProjects/>
                <Footer/>
            </div>
        );
    }
}

export default Home;