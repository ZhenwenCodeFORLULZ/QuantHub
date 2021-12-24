import React, { Component } from 'react';
import "../styles/header.css";
import "../styles/buttons.css";
//Need this to switch pages
//V6 React Router Dom Updates
import { Link } from "react-router-dom";
//Need these for font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars); //import font awesome icons



class HeaderRender extends Component {
    render() {
        return (
            <header className="header-container">
                <nav className="nav-bar">
                    <div className="nav-business-name-container">
                        {/* Backslash directs to home */}
                        <Link to="/" className="business-name">
                            <h1>QuantHub</h1>
                        </Link>

                    </div>

                    <div className="nav-menu">
                        <Link to="/the-team">
                            <button className="buttons" id="nav-button1" onClick={redirect_Team}>
                                The Team
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="buttons" id="nav-button2" onClick={redirect_About}>
                                About
                            </button>
                        </Link>
 
                        <div class="dropdown">
                            <FontAwesomeIcon icon="bars" className="side-menu-icon" onClick={openSlideMenu}/>
                            {/* Navigation for within the side menu */}
                            <div className="dropdown-content" onClick={closeSlideMenu}>
                                <Link to="/" className="side-menu-links" onClick={closeSlideMenu}>Home</Link>
                                <Link to="/the-team" className="side-menu-links" onClick={closeSlideMenu}>The Team</Link>
                                <Link to="/about-us" className="side-menu-links" onClick={closeSlideMenu}>About Us</Link>
                            </div>
                        </div>
                    

                    </div>
                </nav>
            </header>
        );
    }
}

function openSlideMenu() {
    (document.querySelector(".dropdown-content").style.width = "250px");
}
function closeSlideMenu() {
    (document.querySelector(".dropdown-content").style.width = "0");
}

function redirect_Team() {
    console.log("Team Directed");
}
function redirect_About() {
    console.log("About Redirected");
}

export default HeaderRender;