import React from 'react';
import "./what-we-offer-about-page.css"
const WhatWeOfferAboutPage = () => {
    return (
        <div className={"what-we-offer-about-page"} >
            <div className="container">
                <div className="what-we-offer-about-page-content">
                    <h4>About Us</h4>
                    <h2 style={{color: "#ffff"}} >What We Offer for You</h2>
                    <div className="what-we-offer-products-items">
                        <div className="what-we-offer-item">
                            <img src="/image/WhatWeOfferForYou/Photo.jpg" height={"250px"} alt="Photo"/>
                            <p>Spicy</p>
                        </div>
                        <div className="what-we-offer-item">
                            <img src="/image/WhatWeOfferForYou/Photo%20(2).jpg" height={"250px"} alt="Photo"/>
                            <p>Fruits</p>
                        </div>
                        <div className="what-we-offer-item">
                            <img src="/image/WhatWeOfferForYou/Photo%20(1).jpg  " height={"250px"} alt="Photo"/>
                            <p>Nuts & Feesd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOfferAboutPage;