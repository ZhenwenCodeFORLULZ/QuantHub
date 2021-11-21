import React, { Component } from 'react';
import HeaderRender from '../SharedComponents/header';
import "../Styles/topHalf.css";
import "../Styles/theTeam.css";
// Photos imported
import Maximus_Fang_Photo from "../photos/IMG_4319.JPG";
import Maximus_Fang_Photo1 from "../photos/IMG_4322.JPG";
import Paul_Roth_Photo from "../photos/IMG_2847.JPG";
import Brother_MoshiMoshi_Photo from "../photos/brother_moshi_moshi_profile_pic.jpg";

class TheTeamRender extends Component {
    render() {
        return (
            <div className="the-team-container">
                {/* Header Component */}
                <HeaderRender />

                <h1 className="the-team-title">MEET THE TEAM</h1>

                <div className="alignment-div">
                    <div className="the-team-face-cards">
                        <div className="face-card" id="CEO-card">
                            <img
                                src={Maximus_Fang_Photo}
                                className="face-card-photo"
                                alt="Maximus Fang's Forbes Cover depicts his visionary expansion in the Middle East to find alpha."
                            />
                            <div className="face-card-description">
                                <h2 >Maximus Fang</h2>
                                <h3>CEO, Founder, Visionary</h3>
                            </div>
                        </div>

                        <div className="face-card" id="lead-quant-card">
                            <img
                                src={Paul_Roth_Photo}
                                className="face-card-photo"
                                alt="Paul Roth's linkedin pose shows us that he is capable of doing anything at wall street"
                            />
                            <div className="face-card-description">
                                <h2>Paul Roth</h2>
                                <h3>Lead Quantitative Researcher </h3>
                            </div>
                        </div>

                        <div className="face-card" id="client-relations-card">
                            <img
                                src={Brother_MoshiMoshi_Photo}
                                className="face-card-photo"
                                alt="Brother Moshi Moshi envisions something beautiful and prosperous to come at Quanthub."
                            />
                            <div className="face-card-description">
                                <h2>Brother Moshi Moshi</h2>
                                <h3>Client Relation</h3>
                            </div>
                        </div>
                    </div>

                    <section className="the-team-biography">
                        <div className="personal-biography">
                            <img
                                src={Maximus_Fang_Photo1}
                                alt="Maximus Fang's Forbes Cover depicts his visionary expansion in the Middle East to find alpha."
                            />
                            <div>
                                <h2 id="text-color-snow-white">Maximus Fang</h2>
                                <h3 id="text-color-snow-white">Role: CEO, Founder, Visionary</h3>
                                <p id="text-color-dark-grey">Coming straight out of University of Southern California as a film major dropout, Maximus Fang’s change in career path and turn to Wall Street has generated his investors over 13.1 billion dollars in return.
                                    Averaging an annual 12% return regardless of market condition and cycles in his all weather fund, and close to 63% average returns in his qualitative driven but quantitative back fund AlphaGAINZ, maximus fang is truly a revolutionary and a titan of industry in a fierce and shrinking hedge fund space.
                                </p>
                            </div>
                        </div>

                        <div className="personal-biography">
                            <div>
                                <h2>Paul Roth</h2>
                                <h3>Role: Lead Quantitative Researcher</h3>
                                <p id="text-color-dark-grey">Finishing his phd in Astrology at Harvard University at the age of 22, Paul hit wall street during the Quant arm races of 2007 - 2008.
                                    Starting at the subprime department at AIG and moving onto managing risk management at Bear Stearns, Paul's early career was plagued with industry titans falling all around him, eventually Paul found himself at Citadel LLC.
                                </p>
                                <p id="text-color-dark-grey">
                                    Managing the than re-emerging and redemption seeking fund, Paul was able to help develop its market making divisions and development of Citadel’s financial product division.
                                    After Citadel reclaimed its mark in the the hedge fund industry and moved onto becoming a multi management firm, Paul moved onto join Maximus Fang leading the way in helping develop the CryptoCurrency arm of his fund.
                                </p>
                            </div>

                            <img
                                src={Paul_Roth_Photo}
                                alt="Paul Roth's linkedin pose shows us that he is capable of doing anything at wall street"
                            />
                        </div>

                        <div className="personal-biography">
                            <img
                                src={Brother_MoshiMoshi_Photo}
                                alt="Brother Moshi Moshi envisions something beautiful and prosperous to come at Quanthub."
                            />
                            <div>
                                <h2 id="text-color-snow-white">Brother Moshi Moshi</h2>
                                <h3 id="text-color-snow-white">Role: Client Relation</h3>
                                <p id="text-color-dark-grey">Emerging from the outskirts of Bosnia, Brother Moshi Moshi's story is truly unexpected from that of a traditional Wall Street career.
                                    Starting a new belief system and writing books for his belief system, Brother Moshi Moshi channeled his charisma and vibes into something beautiful.
                                    From that Brother Moshi Moshi gained attention through Eastern Europe and many followers for his talks about the energy system within humans.
                                </p>
                            </div>
                        </div>

                    </section>
                </div>

            </div>
        );
    }
}


export default TheTeamRender;