import React, { Component } from 'react';
import "../../styles/bottomHalf.css";

import DateStrategy from './DatesCard.js';
import StudentLoansStrategy from './StudentLoans.js';
import Esports_Strategy from './Esports.js';

class BottomHalfRender extends Component { 
  render() {
    return (
      <section className="strategies-container">
           <h2> Alternative Strategies </h2>
            <section className="Alt-Strategies">
                <div className="datesCard">
                    <DateStrategy />
                </div>
                <div className="leverageStudentLoans">
                    <StudentLoansStrategy />
                </div>
                <div className="esports">
                    <Esports_Strategy />
                </div>
            </section>

            <h2>Stock Focused</h2>
            <section className="Stock-Focused-Strategies">
                <div className="datesCard">
                    <DateStrategy />
                </div>
                <div className="leverageStudentLoans">
                    <StudentLoansStrategy />
                </div>
                <div className="esports">
                    <Esports_Strategy />
                </div>
            </section>

            <h2>Cryptocurrency</h2>
            <section className="Cryptocurrency-Strategies">
                <div className="datesCard">
                    <DateStrategy />
                </div>
                <div className="leverageStudentLoans">
                    <StudentLoansStrategy />
                </div>
                <div className="esports">
                    <Esports_Strategy />
                </div>
            </section>
      </section>
    );
  }
}

export default BottomHalfRender;