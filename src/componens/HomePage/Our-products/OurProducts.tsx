import React from 'react';
import "./our-products.css"
import BigButton from "../../Buttons/Big-button/BigButton";
import ProductsCards from "./Products-cards/ProductsCards";
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Spinner from "../../Spinner/Spinner";
const OurProducts = () => {
    const { loading} = useTypedSelector(state => state.products)

    return (
        <div className={"our-products"} >
            <div className="container">
                <div className="our-products-content">
                    <h4>
                        Categories
                    </h4>
                    <h2>
                        Our Products
                    </h2>
                    {loading ? <Spinner/> : null}
                    <ProductsCards/>
                    <NavLink to={"/shop"}>
                        <BigButton button_color={"#274C5B"} text_color={"#fff"} text={"Load more"}/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;