import React, { Component } from 'react';
import "./styles/App.css"
//Need this to switch pages
//V6 React Router Dom Updates
import { BrowserRouter } from "react-router-dom";
import RoutePaths from "./shared_components/RoutePaths.js";
import Header from "./shared_components/Header.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="app-container">
          {/* wrap the code in BrowserRouter. 
            BrowserRouter is used to direct to new pages when buttons are clicked */}
          <Header/>
          <RoutePaths/>
        </section>
      </BrowserRouter>
    );
  }
}
export default App;
