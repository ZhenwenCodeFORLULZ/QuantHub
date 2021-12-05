import React, { Component } from 'react';
import HeaderRender from '../SharedComponents/header';
import "../Styles/topHalf.css";

// Photos imported
import Quantbase_Home_Photo from "../photos/Quantbase_Home_Image.jpg";
// import { Link } from 'react-router-dom';
class TopHalfrender extends Component {
  constructor(props){
    super(props);
    this.state = {email: '',};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
    onChange(event){ this.setState({email: event.target.value});  }
    onSubmit(event){ 
      let value = this.state.email;
      event.preventDefault();
      console.log({value})
      


      const data = {email:value}
      fetch('',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {console.log('Success:',data);})
      .catch((error)=>{console.error('Error',error);});



      
      this.setState({email: ' ' });}
    
    
    
 
  render() {
    return (
      <div className="topHalf">
        <HeaderRender />
        <section className="home-blurb-container">
          <h2 className="home-blurb-title">CRAZY BETS CRAZY REWARDS MADE EFFORTLESS</h2>

          <picture className="home-img-container">
            <img className="home-img-class" src={Quantbase_Home_Photo} alt="quantbase home"/>
          </picture>

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
                onChange = {this.onChange}
                value = {this.state.email}

                required
              />
            </form>
            <button className="buttons"  onClick={this.onSubmit}>
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

function remindMe() {
  console.log("Remind Me!")
}

export default TopHalfrender;