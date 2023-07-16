import React from 'react';
import "./choose-us.css"
import AboutChooseUsCard from "./About-choose-ua-card/AboutChooseUsCard";

const AboutChooseUs = () => {
    return (
        <div className={"about-choose-us"}>
            <div className="container">
                <div className="about-choose-us-content">
                    <div className="about-us-information-items">
                        <div className="about-us-inform-item">
                            <h4>Why Choose us?</h4>
                            <h2 style={{fontSize: "40px"}}>We do not buy from the open market & traders.</h2>
                            <p>
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                                industry's standard the 1500s, when an unknown
                            </p>
                            <button className="button-about-us-text">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#7EB693"/>
                                    <circle cx="9.5" cy="9.5" r="5.5" fill="#ECECEC"/>
                                </svg>
                                <span>
                                    100% Natural Product
                                </span>
                            </button>
                            <p className={"p-button-about-us-text"}>
                                Simply dummy text of the printing and typesetting industry Lorem Ipsum
                            </p>
                            <button className="button-about-us-text">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#7EB693"/>
                                    <circle cx="9.5" cy="9.5" r="5.5" fill="#ECECEC"/>
                                </svg>
                                <span>
                                     Increases resistance
                                </span>
                            </button>
                            <p className={"p-button-about-us-text"}>
                                Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the
                                thing
                            </p>
                        </div>
                        <div className="about-us-inform-item-photo">
                            <img src="/image/Choose-us.jpg" height={'500px'} alt="Choose-us"/>
                        </div>
                    </div>
                    <div className="choose-us-cards">
                        <AboutChooseUsCard svg={'/image/Choose-us-1.svg'} title={"Return Policy"}
                                           text={"Simply dummy text of the printintypesetting industry."}/>
                        <AboutChooseUsCard svg={'/image/Choose-us-2.svg'} title={"100% Fresh"}
                                           text={"Simply dummy text of the printintypesetting industry."}/>
                        <AboutChooseUsCard svg={'/image/Choose-us-3.svg'} title={"Secured Payment"}
                                           text={"Simply dummy text of the printintypesetting industry."}/>
                        <AboutChooseUsCard svg={'/image/Choose-us-4.svg'} title={"Secured Payment"}
                                           text={"Simply dummy text of the printintypesetting industry."}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutChooseUs;