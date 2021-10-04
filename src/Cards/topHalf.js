import React, {Component} from 'react';

class TopHalfrender extends Component{
    render()
    {
      return(
      <div>
      
          <h1>QuantHub</h1>
          <button onClick ={redirect_Team}> 
          The Team
          </button>
          <button onClick = {redirect_About}>
          About
          </button>
          <h2>CRAZY BETS CRAZY REWARDS MADE EFFORTLESS</h2>
          <p> Make bets on everything and anything. QuantHub offers
              alternative strategies, wacky bets, and superior returns.
              Let your money 100x for you!!!
          </p>

          <div>
          <form>
          <label>
              EMAIL:
              <input type = "text" 
              name = "email"
              />
          </label>
          </form>
          <button onClick = {pop_EarlyAccess}>
             Get Early Access
          </button>
          <button onClick = {remindMe}>
              Remind Me!
          </button>
          </div>


    </div>
    );
    }
}

function redirect_Team(){
    console.log("Team Directed");
  }
  function redirect_About(){
    console.log("About Redirected");
  }
  function pop_EarlyAccess(){
    console.log("Early Accessed");
  }
  function remindMe(){
    console.log("Remind Me!")
  }

  export default TopHalfrender;