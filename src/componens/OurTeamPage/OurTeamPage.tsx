import React, {useEffect} from 'react';
import "./our-team-page.css"
import Header from "../Header/Header";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import OrganicExpertsCard from "../OrganicExpert-card/OrganicExpertsCard";
import {addBasketItems} from "../../store/actions/basketActions";
import Spinner from "../Spinner/Spinner";
const OurTeamPage = () => {
    const {getAllExperts} = useActions()
    const {experts, loading} = useTypedSelector(state => state.experts)
    useEffect(()=> {
        window.scrollTo(0, 0)
        getAllExperts()
    }, [])
    return (
        <div className={"our-team-page"} >
            <Header img={"/image/Our-team.png"} title={"Our Team"}/>
            <div className="our-team-page-content">
                <div className="our-team-titles">
                    <h4>Team</h4>
                    <h2>Our Organic Experts</h2>
                    <p>Our experts are professionals in their field, so they can guarantee the highest quality of work in the shortest possible time</p>
                </div>
            </div>
            {loading ? <Spinner/>: null}
            <div className="our-experts-items">
                {experts.length != 0 ? experts.map(expert => {
                    return <div className={"organic-expert-item"} >
                        <OrganicExpertsCard
                            img={expert.img}
                            name={expert.name}
                            last_name={expert.last_name}
                            work={expert.work}
                            instagram={expert.instagram}
                            twitter={expert.twitter}
                            facebook={expert.facebook}
                            _id={expert._id}
                        />
                    </div>
                }): ""}
            </div>
        </div>
    );
};

export default OurTeamPage;