import React, {FC} from 'react';
import "./about-choose-us-card.css"

interface IChooseUsCard {
    svg: string,
    title: string
    text: string
}
const AboutChooseUsCard: FC<IChooseUsCard> = ({title, text, svg}) => {
    return (
        <div className={"about-choose-us-card"}>
            <div className="choose-us-img">
                <img src={svg} alt="SVG"/>
            </div>
            <h5>
                {title}
            </h5>
            <p>
                {text}
            </p>
        </div>
    );
};

export default AboutChooseUsCard;