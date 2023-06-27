import React, {useEffect} from 'react';
import Header from "../Header/Header";
import WeDoCreative from "./WeDoCreative/WeDoCreative";
import AboutChooseUs from "./Choose-us/AboutChooseUs";
import OrganicExperts from "./OrganicExperts/OrganicExperts";
import WhatWeOfferAboutPage from "./WhatWeOffer/WhatWeOfferAboutPage";
import {useActions} from "../../hooks/useActions";


const AboutPage = () => {
    const {getAllExperts} = useActions()
    useEffect(() => {
        window.scrollTo(0, 0);
        getAllExperts()
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