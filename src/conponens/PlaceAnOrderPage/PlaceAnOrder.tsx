import React, {useEffect, useState} from 'react';
import "./place-an-order.css"
import BigButton from "../Buttons/Big-button/BigButton";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";

const PlaceAnOrder = () => {
    const {changePhone, changeName, changeCountry, changeCity, changeAddress, confirmOrder, clearOrderData} = useActions()
    const {phone, city, name, address, country, confirm} = useTypedSelector(state => state.placeAnOrder)
    const {placeAnOrder} = useTypedSelector(state => state)
    const {items} = useTypedSelector(state => state.basket)
    useEffect(()=> {
        window.scrollTo(0, 0)
        clearOrderData()
    }, [])
    return (
        <div className={"place-an-order-page"} >
            <div className="place-an-order-content">
                <div className="container">
                    <div className="place-an-order-card">
                        <div className="place-an-order-input-text">
                            <p>Number</p>
                            <input
                                onChange={(e) => changePhone(e)}
                                value={phone ? phone : ""}
                                type="number"
                                placeholder={"Enter your Number"}
                            />
                        </div>
                        <div className="place-an-order-input-text">
                            <p>Name</p>
                            <input
                                onChange={(e)=> changeName(e)}
                                value={name}
                                type="text"
                                placeholder={"Enter your Name"}
                            />
                        </div>
                        <div className="place-an-order-input-text">
                            <p>Country</p>
                            <input
                                onChange={(e)=> changeCountry(e)}
                                value={country}
                                type="text"
                                placeholder={"Enter your Country"}
                            />
                        </div>
                        <div className="place-an-order-input-text">
                            <p>City</p>
                            <input
                                onChange={(e)=> changeCity(e)}
                                value={city}
                                type="text"
                                placeholder={"Enter your City"}
                            />
                        </div>
                        <div className="place-an-order-input-text">
                            <p>Address</p>
                            <input
                                onChange={(e)=> changeAddress(e)}
                                value={address}
                                type="text"
                                placeholder={"Enter your address"}
                            />
                        </div>
                        <div className="place-an-order-confirm-button">
                            <div onClick={()=> {
                                confirmOrder(items, placeAnOrder)
                            }} className="place-an-order-confirm-button-item">
                                <button disabled={confirm}
                                        style={{backgroundColor: confirm ? "#EFF6F1" : "#274C5B"}}
                                        className={"big-button"}>
                                    <div style={{color: confirm ? "#274C5B" : "#fff"}}>
                                        {confirm ? "Confirmed" : "Confirm your order"}
                                    </div>
                                    {confirm ? "" :
                                        <div className="big-button-svg">
                                            <svg width="8" height="7" viewBox="0 0 9 8" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113"
                                                    stroke="white" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                            </svg>
                                        </div>}
                                </button>
                                {confirm ?
                                    <NavLink to={"/"} >
                                        <BigButton button_color={"#274C5B"} text_color={"#fff"} text={"Go to Home page"}/>
                                    </NavLink>
                                    :
                                    ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceAnOrder;