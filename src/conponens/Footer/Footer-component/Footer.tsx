import React from 'react';
import FooterSubscribe from "../Footer-subscribe/FooterSubscribe";
import "./footer.css"
import FooterContent from "../Footer-content/FooterContent";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <FooterSubscribe/>
                <FooterContent/>
            </div>
        </footer>
    );
};

export default Footer;