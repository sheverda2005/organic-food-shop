import React from 'react';
import "./organic-experts.css"
import OrganicExpertsCard from "../../OrganicExpert-card/OrganicExpertsCard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IExperts} from "../../../types/expertsTypes";
const OrganicExperts = () => {
    const {experts} = useTypedSelector(state => state.experts)
    let last_experts: IExperts[] = []
    if (experts.length != 0) {
        last_experts = [experts[0], experts[1], experts[2]]
    }
    return (
        <div className={"organic-experts"}>
            <div className="container">
                <div className="organic-experts-content">
                    <div className="organic-experts-content-titles">
                        <h4>Team</h4>
                        <h2>Our Organic Experts</h2>
                        <p>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                    </div>
                    <div className="organic-exprerts-cards">
                        {last_experts.map(expert => {
                            return <OrganicExpertsCard
                                _id={expert._id}
                                img={expert.img}
                                name={expert.name}
                                last_name={expert.last_name}
                                work={expert.work}
                                facebook={expert.facebook}
                                instagram={expert.instagram}
                                twitter={expert.twitter}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganicExperts;