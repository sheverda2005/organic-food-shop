import React, {useEffect} from 'react';
import Header from "../Header/Header";
import WeDoCreative from "./WeDoCreative/WeDoCreative";
import AboutChooseUs from "./Choose-us/AboutChooseUs";
import OrganicExperts from "./OrganicExperts/OrganicExperts";
import WhatWeOfferAboutPage from "./WhatWeOffer/WhatWeOfferAboutPage";


const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div   className={"about-page"} >
            <Header img={'/image/About-header.png'} title={"About us"} />
            <WeDoCreative/>
            <AboutChooseUs/>
            <OrganicExperts/>
            <WhatWeOfferAboutPage/>
        </div>
    );
};

export default AboutPage;