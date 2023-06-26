import React from 'react';
import "./offer-banner.css"
const OfferBanner = () => {
    return (
        <div className={"offer-banner"}>
            <div className="container">
                <div className="offer-banner-content">
                    <div className="offer-banners-items">
                        <div className="offer-banners-item">
                            <p>
                                Natural!!
                            </p>
                            <h2>
                                <span> Get Garden </span> <span>Fresh Fruits</span>
                            </h2>
                        </div>
                        <div className="offer-banners-item second">
                            <p>
                                Offer!!
                            </p>
                            <h2>
                                <span> Get 10% off </span> <span>on Vegetables</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferBanner;