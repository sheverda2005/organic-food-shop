import React, {FC} from 'react';
import "./footer-item-svg.css"

interface ISvg {
    svg: any
}
const MediaSvgItem: FC<ISvg> = ({svg}) => {
    return (
        <div className={"footer-svg-item"} >
            {svg}
        </div>
    );
};

export default MediaSvgItem;