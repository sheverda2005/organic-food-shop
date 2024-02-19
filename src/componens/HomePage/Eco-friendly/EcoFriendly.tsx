import React from 'react';
import "./eco-friendly.css"
const EcoFriendly = () => {
    return (
        <div className={'container-eco-friendly'} >
            <div className={"eco-friendly"}>
                <img src="/image/Eco-friendly.jpg" alt="Eco-friendly"/>
                <div className="eco-friendly-content">
                    <div className="eco-fiendly-text">
                        <div className="eco-fiendly-text-titles">
                            <h4>Eco Friendly</h4>
                            <h2>Econis is a Friendly Organic Store</h2>
                        </div>
                        <div className="eco-friendly-text-description">
                            <h5>Start with Our Company First</h5>
                            <p>The company began its work with the goal of improving people's lives by selling only proven products</p>
                        </div>
                        <div className="eco-friendly-text-description">
                            <h5>Learn How to Grow Yourself</h5>
                            <p>Develop with us, learn about healthy food, and grow</p>
                        </div>
                        <div className="eco-friendly-text-description">
                            <h5>Farming Strategies of Today</h5>
                            <p>The developed strategy for the introduction of agriculture allows us to grow effectively in this area</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoFriendly;