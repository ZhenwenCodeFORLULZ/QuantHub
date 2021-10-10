import React, { Component } from 'react';
//Need this to switch pages
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TopHalfrender from '../Cards/topHalf';
import TheTeamRender from '../Pages/theTeam';
import "../Styles/topHalf.css";

class HeaderRender extends Component {
    render() {
        return (
            //wrap the code in Router
            //Router is used to direct to new pages when buttons are clicked
            <Router>
                <header className="header-container">
                    <nav class="nav-bar">
                        <div>
                            {/* Backslash directs to home */}
                            <Link to="/">
                                <h1>QuantHub</h1>
                            </Link>
                        </div>

                        <div className="nav-menu">

                            <button className="buttons" id="nav-button1" onClick={redirect_Team}>
                                The Team
                            </button>
                            <button className="buttons" id="nav-button2" onClick={redirect_About}>
                                About
                            </button>

                        </div>
                    </nav>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </header>
            </Router>

        );
    }
}

function Home() {
    return <TopHalfrender />;
}

function redirect_Team() {
    console.log("Team Directed");
}
function redirect_About() {
    console.log("About Redirected");
}

export default HeaderRender;