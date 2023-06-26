import React, {useEffect} from 'react';
import "./home-header.css"
import BigButton from "../../Buttons/Big-button/BigButton";
import {NavLink} from "react-router-dom";
const HomeHeader = () => {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    return (
        <header>
           <div className="container">
               <div className="header-content">
                   <div className="home-header-text">
                       <p>
                           100% Natural Food
                       </p>
                       <h1>
                       <span>
                           Choose the best
                       </span>
                           <span>
                           healthier way
                        </span>
                           <span className={"of-life"} >
                             of life
                        </span>
                       </h1>
                       <NavLink to={"/services"}>
                           <BigButton button_color={"#EFD372"} text_color={"#274C5B"} text={"Explore now"} />
                       </NavLink>
                   </div>
               </div>
           </div>
        </header>
    );
};

export default HomeHeader;