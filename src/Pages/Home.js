import React, { Component } from 'react';
import "../styles/home.css";
import TopHalfRender from './cards/TopHalf.js';
import BottomHalfRender from './cards/BottomHalf.js';

class Home extends Component {
    render() {
      return (
          <section className="home-container">
            <TopHalfRender />
            <BottomHalfRender/>
          </section>
      );
    }
}
export default Home;