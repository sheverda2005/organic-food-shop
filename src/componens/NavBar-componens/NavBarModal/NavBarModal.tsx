import React, {FC} from 'react';
import "./navBarModal.css"
import {NavLink} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";

interface NavBarModal {
    active: boolean
}
const NavBarModal: FC<NavBarModal> = ({active}) => {
    const {menuBurgerButtonChange} = useActions()
    return (
        <div className={`nav-bar-modal ${active ? "active": ""}`} >
            <ul>
                <li>
                    <NavLink onClick={()=> menuBurgerButtonChange()} className={"nav-link"} to={"/"}> Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=> menuBurgerButtonChange()} className={"nav-link"} to={"/about"}> About</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=> menuBurgerButtonChange()} className={"nav-link"} to={"/shop"}>Shop</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=> menuBurgerButtonChange()} className={"nav-link"} to={"/our-team"}>Team</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBarModal;