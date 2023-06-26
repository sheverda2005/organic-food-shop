import React, {useEffect} from 'react';
import Header from "../Header/Header";
import AllProducts from "./AllProducts/AllProducts";
import "./shopPage.css"

const ShopPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"shop-page"}>
            <Header img={'/image/shop-banner.png'} title={"Shop"} />
            <AllProducts/>
        </div>
    );
};

export default ShopPage;