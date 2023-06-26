import React from 'react';
import OfferBanner from "./Offer-banner/OfferBanner";
import HomeHeader from "./HomeHeader/HomeHeader";
import AboutUs from "./About-us/AboutUs";
import OurProducts from "./Our-products/OurProducts";
import WeOffer from "./We-Offer/WeOffer";
import EcoFriendly from "./Eco-friendly/EcoFriendly";
import Gallery from "./Galerry/Gallery";
import HomePageNews from "./HomePageNews/HomePageNews";

const HomePage = () => {
    return (
        <div className={"home-page"}>
            <HomeHeader/>
            <OfferBanner/>
            <AboutUs/>
            <OurProducts/>
            <WeOffer/>
            <EcoFriendly/>
            <Gallery/>
            <HomePageNews/>
        </div>
    );
};

export default HomePage;