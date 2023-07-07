import React from 'react';
import "./navBar.css"
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {menuBurger} from "../../store/reducers";
import NavBarModal from "./NavBarModal/NavBarModal";

const NavBar = () => {
    const {items} = useTypedSelector(state => state.basket)
    const {menuBurgerButtonChange} = useActions()
    const {menu_button_button} = useTypedSelector(state => state.menuBurger)
    return (
        <nav>
            <div className="container">
                <div className="nav-content">
                    <div className="nav-text-items">
                        <div className="logo-menu-burger">
                            <div onClick={() => menuBurgerButtonChange()}
                                 className={`menu-burger-button ${menu_button_button.active ? "active" : ""}`}>
                                <div className="menu-burger-button-item one"></div>
                                <div className="menu-burger-button-item two"></div>
                                <div className="menu-burger-button-item tree"></div>
                            </div>
                            <NavLink to={'/'}>
                                <div className="nav-items-logo-title">
                                    <img src="/image/Logo.svg" alt="Logo"/>
                                    <h1 className={'nav-title'}>Organick</h1>
                                </div>
                            </NavLink>
                        </div>
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
                    <div className="nav-items-products-search-basket">
                        <div className="nav-items-search">
                            <input type="text"/>
                            <div className="search-svg">
                                <svg width="17" height="16" viewBox="0 0 22 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.4692 18.8921L16.7086 14.1315C17.8547 12.6057 18.4734 10.7485 18.4713 8.84016C18.4713 3.96573 14.5056 0 9.63118 0C4.75674 0 0.791016 3.96573 0.791016 8.84016C0.791016 13.7146 4.75674 17.6803 9.63118 17.6803C11.5395 17.6824 13.3967 17.0637 14.9225 15.9175L19.6831 20.6781C19.9241 20.8936 20.2384 21.0085 20.5615 20.9995C20.8846 20.9905 21.192 20.8581 21.4205 20.6295C21.6491 20.401 21.7815 20.0936 21.7905 19.7705C21.7996 19.4474 21.6846 19.1331 21.4692 18.8921ZM3.31678 8.84016C3.31678 7.59129 3.68711 6.37047 4.38094 5.33207C5.07478 4.29367 6.06095 3.48434 7.21476 3.00642C8.36856 2.52849 9.63818 2.40345 10.8631 2.64709C12.0879 2.89073 13.213 3.49212 14.0961 4.3752C14.9792 5.25829 15.5806 6.38341 15.8242 7.60828C16.0679 8.83315 15.9428 10.1028 15.4649 11.2566C14.987 12.4104 14.1777 13.3966 13.1393 14.0904C12.1009 14.7842 10.88 15.1546 9.63118 15.1546C7.95711 15.1526 6.35218 14.4866 5.16844 13.3029C3.98469 12.1192 3.31878 10.5142 3.31678 8.84016Z"
                                        fill="#FAFAFA"/>
                                </svg>
                            </div>
                        </div>
                        <NavLink to={"/basket"}>
                            <div className="nav-items-bscket">
                                <div className="bscket">
                                    <svg width="22" height="20" viewBox="0 0 27 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.5689 23.0001C12.2439 23.0001 12.7911 22.4529 12.7911 21.7779C12.7911 21.1029 12.2439 20.5557 11.5689 20.5557C10.8939 20.5557 10.3467 21.1029 10.3467 21.7779C10.3467 22.4529 10.8939 23.0001 11.5689 23.0001Z"
                                            fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path
                                            d="M20.1246 23.0001C20.7996 23.0001 21.3468 22.4529 21.3468 21.7779C21.3468 21.1029 20.7996 20.5557 20.1246 20.5557C19.4496 20.5557 18.9023 21.1029 18.9023 21.7779C18.9023 22.4529 19.4496 23.0001 20.1246 23.0001Z"
                                            fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path d="M1.79102 1H5.57291L8.40933 17.0731H23.5369" stroke="white"
                                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path
                                            d="M7.90221 13.1837L23.1494 13.2907C23.2587 13.2908 23.3647 13.2529 23.4493 13.1837C23.5339 13.1144 23.5918 13.0179 23.6133 12.9107L25.3151 4.40145C25.3289 4.33283 25.3272 4.26203 25.3102 4.19414C25.2933 4.12625 25.2615 4.06297 25.2171 4.00886C25.1727 3.95476 25.1169 3.91118 25.0536 3.88128C24.9903 3.85138 24.9212 3.83589 24.8513 3.83594L6.35838 3.83594"
                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p className="bscket-text">
                                    <span>Card</span>
                                    <span>{`(${items.length})`}</span>
                                </p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;