import React, { Component } from 'react';
import "./Styles/App.css";
import TopHalfrender from './Cards/topHalf.js';
import DateStrategy from './Cards/datesCard.js';
import StudentLoansStrategy from './Cards/studentLoans.js';
import Esports_Strategy from './Cards/esports.js';
import TheTeamRender from './Pages/theTeam.js';

class App extends Component {

  render() {
    return (
      <div>
        <TheTeamRender />

        <div className="topHalf" >
          <TopHalfrender />
        </div>

        <div className="bottomHalf">
          <h1> Alternative Strategies </h1>
          <div className="Alt-Strategies">
            <div className="datesCard">
              <DateStrategy />
            </div>
            <div className="leverageStudentLoans">
              <StudentLoansStrategy />
            </div>
            <div className="esports">
              <Esports_Strategy />
            </div>

          </div>
        </div>

        <h1>Stock Focused</h1>
        <div className="Stock-Focused-Strategies">
          <div className="datesCard">
            <DateStrategy />
          </div>
          <div className="leverageStudentLoans">
            <StudentLoansStrategy />
          </div>
          <div className="esports">
            <Esports_Strategy />
          </div>
        </div>

        <h1>Cryptocurrency</h1>
        <div className="Cryptocurrency-Strategies">
          <div className="datesCard">
            <DateStrategy />
          </div>
          <div className="leverageStudentLoans">
            <StudentLoansStrategy />
          </div>
          <div className="esports">
            <Esports_Strategy />
          </div>
        </div> 
      </div>


    );
  }
}
export default App;
