import React, { Component } from 'react';
import HeaderRender from '../SharedComponents/header';
import "../Styles/topHalf.css";

class TopHalfrender extends Component {
  render() {
    return (
      <div className="topHalf">
        <HeaderRender />


        <section className="home-blurb-container">
          <h2 className="home-blurb-title">CRAZY BETS CRAZY REWARDS MADE EFFORTLESS</h2>
          <p className="home-blurb-paragraph"> Make bets on everything and anything. QuantHub offers
            alternative strategies, wacky bets, and superior returns.
            Let your money 100x for you!!!
          </p>

          <div className="home-blurb-sign-up-form">
            <form className="home-blurb-email-entry-box">
              <input
                type="email"
                class="email"
                name="email"
                placeholder="Enter your email address"
                size="40"
                required
              />
            </form>

            <button className="buttons" onClick={pop_EarlyAccess}>
              Get Early Access
            </button>
            <button className="buttons" onClick={remindMe}>
              Remind Me!
            </button>
          </div>
        </section>


      </div>
    );
  }
}

function pop_EarlyAccess() {
  console.log("Early Accessed");
}
function remindMe() {
  console.log("Remind Me!")
}

export default TopHalfrender;