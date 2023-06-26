import React, {useEffect} from 'react';
import BasketCard from "./BasketCard";
import "./basket-page.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
const BasketPage = () => {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    const {items} = useTypedSelector(state => state.basket)
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
            </div>
        </div>
    );
}
export default BasketPage;