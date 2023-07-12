import React, {useEffect} from 'react';
import BasketCard from "./BasketCard";
import "./basket-page.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import BigButton from "../Buttons/Big-button/BigButton";
import {NavLink} from "react-router-dom";
import footerContent from "../Footer/Footer-content/FooterContent";
const BasketPage = () => {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    const {items} = useTypedSelector(state => state.basket)
    if (items.length > 0) {

        return (
            <div className={"basket-page"} >
                <div className="basket-page-content">
                    {items.map(item => {
                        return <BasketCard
                            productName={item[0].productName}
                            quantity={item[1].quantity}
                            img={item[0].img}
                            id={item[0]._id}
                        />
                    })}
                    <div className="place-an-order">
                        <NavLink to={"/place-an-order"} >
                            <BigButton button_color={"#EFD372"} text_color={"#274C5B"} text={"Place an order"}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={'basket-empty-content'} >
                <p>Basket is empty</p>
            </div>
        );
    }
}
export default BasketPage;