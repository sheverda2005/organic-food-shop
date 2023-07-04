import React, {FC} from 'react';
import "./navBarModal.css"
import {NavLink} from "react-router-dom";

interface NavBarModal {
    active: boolean
}
const NavBarModal: FC<NavBarModal> = ({active}) => {
    console.log(active)
    return (
        <div className={`nav-bar-modal ${active ? "active": ""}`} >
            <ul>
                <li>
                    <NavLink className={"nav-link"} to={"/"}> Home</NavLink>
                </li>
                <li>
                    <NavLink className={"nav-link"} to={"/about"}> About</NavLink>
                </li>
                <li>
                    <NavLink className={"nav-link"} to={"/shop"}>Shop</NavLink>
                </li>
                <li>
                    <NavLink className={"nav-link"} to={"/our-team"}>Team</NavLink>
                </li>
                <li>
                    <NavLink className={"nav-link"} to={"/news"}>News</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBarModal;