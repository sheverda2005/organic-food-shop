import React from 'react';
import "./footer-subscribe.css"
const FooterSubscribe = () => {
    return (
        <div className={"footer-subscribe"} >
            <div className="footer-subscribe-content">
                <h2 style={{color: "#fff", fontSize: '45px'}} >
                    Subscribe to
                   <p  className={"footer-subscribe-content-p"} > our Newsletter</p>
                </h2>
                <div className="email-form">
                    <input type="text" placeholder={"Your Email Address"} />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default FooterSubscribe;