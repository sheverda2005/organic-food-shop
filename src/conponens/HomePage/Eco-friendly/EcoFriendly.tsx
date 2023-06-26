import React from 'react';
import "./eco-friendly.css"
const EcoFriendly = () => {
    return (
        <div className={'container-eco-friendly'} >
            <div className={"eco-friendly"}>
                <img src="/image/Eco-friendly.jpg" alt="Eco-friendly"/>
                <div className="eco-friendly-content">
                    <div className="eco-fiendly-text">
                        <h4 >Eco Friendly</h4>
                        <h2  >Econis is a Friendly Organic Store</h2>
                        <div className="eco-friendly-text-description">
                            <h5>Start with Our Company First</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="eco-friendly-text-description">
                            <h5>Learn How to Grow Yourself</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="eco-friendly-text-description">
                            <h5>Farming Strategies of Today</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoFriendly;