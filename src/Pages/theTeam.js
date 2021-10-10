import React, { Component } from 'react';
import "../Styles/topHalf.css";
import "../Styles/theTeam.css";

class TheTeamRender extends Component {
    render() {
        return (
            <div className="the-team-container">
                <h1>MEET THE TEAM</h1>

                <div className="the-team-face-cards">
                    <div className="CEO-card">
                        <h2>Maximus Fang</h2>
                        <h3>Role: CEO, Founder, Visionary</h3>
                        <p>Coming straight out of University of Southern California as a film major dropout, Maximus Fang’s change in career path and turn to Wall Street has generated his investors over 13.1 billion dollars in return.
                            Averaging an annual 12% return regardless of market condition and cycles in his all weather fund, and close to 63% average returns in his qualitative driven but quantitative back fund AlphaGAINZ, maximus fang is truly a revolutionary and a titan of industry in a fierce and shrinking hedge fund space.
                        </p>
                    </div>

                    <div className="lead-quant-card">

                    </div>

                    <div className="client-relations-card">

                    </div>
                </div>
            </div>
        );
    }
}


export default TheTeamRender;