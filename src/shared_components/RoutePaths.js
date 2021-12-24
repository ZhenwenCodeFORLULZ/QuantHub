import React from 'react';
//Need this to switch pages
//V6 React Router Dom Updates
import {
    Routes,
    Route,
} from "react-router-dom";
//Pages
import TheTeamRender from "../pages/TheTeam.js";
import HomeRender from "../pages/Home.js";

const RoutePaths = () => 
    <Routes>
        {/* A <Routes> looks through its children <Route> and renders the first one that matches the current URL. */}
        <Route path="/" element={<HomeRender />}/>
        <Route path="/the-team" element={<TheTeamRender/>}/>
    </Routes>
export default RoutePaths;
