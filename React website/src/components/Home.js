import React, { Component } from 'react';
import Navbar from "./Navbar"
import HomeHeader from "./HomeHeader"
import ComparePage from './LandingCompare.js'
import CSRProjects from "./CSRProjects"
import Footer from "./footer"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <HomeHeader/>
                <ComparePage/>
                <CSRProjects/>
                <Footer/>
            </div>
        );
    }
}

export default Home;