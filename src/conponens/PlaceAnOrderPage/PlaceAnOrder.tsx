import React, {useEffect, useState} from 'react';
import "./place-an-order.css"
import BigButton from "../Buttons/Big-button/BigButton";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PlaceAnOrder = () => {
    const {changePhone, changeName, changeCountry, changeCity, changeAddress, confirmOrder} = useActions()
    const {phone, city, name, address, country} = useTypedSelector(state => state.placeAnOrder)
    const {placeAnOrder} = useTypedSelector(state => state)
    const {items} = useTypedSelector(state => state.basket)
    useEffect(()=> {
        window.scrollTo(0, 0)
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
                                <BigButton button_color={"#274C5B"} text_color={"#fff"} text={"Confirm your order"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceAnOrder;