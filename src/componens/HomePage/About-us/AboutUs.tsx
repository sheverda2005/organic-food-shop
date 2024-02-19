import React, {useEffect} from 'react';
import "./about-us.css"
import BigButton from "../../Buttons/Big-button/BigButton";
import {NavLink} from "react-router-dom";

const AboutUs = () => {
    return (
        <div className={'about-us'}>
            <div className="container">
                <div className="about-us-content">
                    <div className="about-photo-content">
                        <img src="/image/about-us.png" alt="About us"/>
                    </div>
                    <div className="about-text-content">
                        <div className="about-text-content-titles">
                            <h4>
                                About Us
                            </h4>
                            <h2>
                                We Believe in Working
                                Accredited Farmers
                            </h2>
                        </div>
                        <p className={'about-text-paragraph'}>
                            The company buys products only from proven farmers with a good reputation, which allows to keep customers always satisfied

                        </p>
                        <div className="about-us-content-items">
                            <div className="about-us-content-item">
                                <div className="about-us-item-svg">
                                    <svg width="40" height="35" viewBox="0 0 53 46" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <circle cx="12" cy="15" r="9" fill="#FFF4CD"/>
                                        <rect x="7" width="46" height="46" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2_14930" transform="scale(0.01)"/>
                                            </pattern>
                                            <image id="image0_2_14930" width="100" height="100"
                                                   xlinkHref="data:image/png;base64,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"/>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="about-us-item-text">
                                    <h5>
                                        Organic Foods Only
                                    </h5>
                                    <p>
                                        Only organic products are presented on the site
                                    </p>
                                </div>
                            </div>
                            <div className="about-us-content-item">
                                <div className="about-us-item">
                                    <div className="about-us-item-svg">
                                        <img src="/image/about-us.svg" alt="About us"/>
                                    </div>
                                </div>
                                <div className="about-us-item-text">
                                    <h5>
                                        Quality Standards
                                    </h5>
                                    <p>
                                        We are responsible for the quality standard before buyers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <NavLink to={"/about"}>
                            <BigButton button_color={"#274C5B"} text_color={"#fff"} text={"Shop now"}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;