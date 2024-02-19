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
                                Our store closely monitors the quality of every product we carry, so we know that sourcing plays a key role in ensuring the highest quality. Therefore, we are happy to announce that we buy our products only from verified farmers.
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
                                All products are exclusively natural
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
                                           text={"We make a volume of products of poor quality if a similar situation occurs"}/>
                        <AboutChooseUsCard svg={'/image/Choose-us-2.svg'} title={"100% Fresh"}
                                           text={"all products are completely fresh and ripe with secure packaging"}/>
                        <AboutChooseUsCard svg={'/image/Choose-us-3.svg'} title={"Accept calls"}
                                           text={"We accept calls 24/7 to ensure convenience for the client"}/>
                        <AboutChooseUsCard svg={'/image/Choose-us-4.svg'} title={"Secured Payment"}
                                           text={"Payments are made with a protection system, so users can safely subscribe"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutChooseUs;