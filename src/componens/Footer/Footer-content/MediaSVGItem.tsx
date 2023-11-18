import React, {FC} from 'react';
import "./footer-item-svg.css"
import {Link} from "react-router-dom";

interface ISvg {
    svg: any
    url: string
}
const MediaSvgItem: FC<ISvg> = ({svg, url}) => {
    return (
        <Link  to={url} className={"footer-svg-item"} >
            {svg}
        </Link>
    );
};

export default MediaSvgItem;