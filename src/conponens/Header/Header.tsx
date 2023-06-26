import React, {FC} from 'react';
import "./page-header.css"

interface IHeader {
    img: string
    title: string
}
const Header: FC<IHeader> = ({title, img}) => {
    return (
        <div style={{
            backgroundImage: "url(" + img + ")"
        }} className={'page-header'} >
            <h1>{title}</h1>
        </div>
    );
};

export default Header;