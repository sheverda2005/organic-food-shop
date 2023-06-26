import React, {FC} from 'react';
import "./organic-exprerts-card.css"
import InstagmarSVG from "./SocialMediaSVG/InstagmarSVG";
import FacebookSVG from "./SocialMediaSVG/FacebookSVG";
import TwitterSVG from "./SocialMediaSVG/TwitterSVG";
import {IExperts} from "../../types/expertsTypes";

const OrganicExpertsCard: FC<IExperts> = ({img, work, name, facebook, twitter, instagram, last_name}) => {
    console.log(`localhost:5000/api/getImageExpert/${img}`)
    return (
            <div className="organic-experts-card">
                <img src={`https://organic-food-shop-server.vercel.app/api/getImageExpert/${img}`} height={"350"} alt="Product"/>
                <div className="organic-experts-card-text">
                   <div className="organic-experts-card-titles">
                       <h5>{name + " " + last_name}</h5>
                       <p>{work}</p>
                   </div>
                    <div className="social-media">
                        {instagram ? <a href={instagram}><InstagmarSVG/></a> : null}
                        {facebook? <a href={facebook} > <FacebookSVG/></a>: null}
                        {twitter ? <a href={twitter} ><TwitterSVG/></a> : null}
                    </div>
                </div>
            </div>
    );
};

export default OrganicExpertsCard;