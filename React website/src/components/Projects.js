import React, { Component } from 'react';
import "./Projects.css";
import logo from "./images/UPES-New-Logo.png"
import img1 from "./images/Utthan/temple.jpg";
import img2 from "./images/Utthan/ground2.jpg"
import img3 from "./images/Utthan/ground3.jpg"
import img4 from "./images/Utthan/doc3.jpg"
import img5 from "./images/Utthan/community.jpg"


class Projects extends Component {
    render() {
        return (
            <div>
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

    <div className="proDisplay">
        <h1 id="proName">Project Utthan</h1>
        <div className="proTitle">
            <p>Sustainable development of Village Dhalani Koti-Utthan </p>
        </div>
        <div className="content">
            <div className="matter">
                
                <p className="sub-title">ABOUT</p>
                <p>The “<b>Utthan</b>" project is about the application of knowledge in the local community derived in process of Manthan at a University i.e. Universe of knowledge. It explores the opportunities in harnessing the scarce resources up to optimum level.<b>The communities in the vicinity of our campus have immense scenic beauty as well as rich culture to offer to the world</b>. Raising the bar of development at the community level and to lit self-confidence at the individual level is the key aim of the project.  The resemblance of challenges of hilly terrain in Uttarakhand in Gram Panchayat <b>Tehsil Vikasnagar.</b>

                </p>
            </div>
            <div className="picHolder">
                <img src={img1} alt="file_pic"/>
            </div>
        </div>
        <div className="content">
            <div className="picHolder">
                <img src={img2} alt="file_pic"/>
            </div>
            <div className="matter">
                <p className="sub-title1">VISION</p>
                <p>To co-create a Gram Panchayat having the potential to adopt sustainable development leading to generation of local opportunities, higher capacities of governance, and lively community to tackle current and future challenges.

                </p>
            </div>
        </div>
        <div className="content">
            <div className="matter">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam nobis vero fugiat. Voluptates atque minima numquam nesciunt labore quos ab recusandae adipisci commodi neque? Distinctio quis aspernatur neque nobis?
                    oluptates atque minima numquam nesciunt labore quos ab recusandae adipisci commodi neque? Distinctio quis aspernatur neque nobi
                </p>
            </div>
            <div className="picHolder">
                <img src={img3} alt="file_pic"/>
            </div>
        </div>
    </div>

    <h1 id="Page-title-2">What we do</h1>

    <div className="Moreinfo">
        <div className="Education">
            <p className="title_2">OBJECTIVE</p>
            <div className="sub_title">
                <ol>
                    <li>To analysis, the current state of development based on level of personal, Human, Economic, and Social.
                    </li>
                    <li>To prepare a development plan and identification of the phases that will lead to sustainable development.

                    </li>
                    <li>To build capacities of good governance that will strengthen the community to move towards higher goals.

                    </li>
                    <li>To include all stakeholders and every section of the community in the process of planning and execution and safeguard their common interest.

                    </li>
                    <li>To utilize this opportunity to reduce the gap between the academics and actual world.

                    </li>
                    <li>To cover all aspects of sustainable development and create a model to be referred to for coming generations.

                    </li>

                </ol>
            </div>

        </div>
        <div className="special">
            <div className="container">
                <div className="div1">
                   
                    <img src={img4} alt=""/>
                </div>
                <div className="div1">
                    
                    <img src={img5} alt=""/>
                </div>

            </div>
            
            <div className="div2">
                <h1>
                    Special Care Unit
                </h1>
                <p>
                    TSecondary School. Special training and individual care is imparted to these children. The main objective is to mainstream them by developing possible academic skills and independent living skills.
                    <br/>
                    <br/>
<b>The unit receives support from Military Order of Collar Charitable Foundation, U.K.</b>
                </p>
           
            </div>
            <br/><br/>
    
            </div>
        </div>
    </div>
        );
    }
}

export default Projects;