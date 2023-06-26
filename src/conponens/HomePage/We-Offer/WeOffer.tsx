import React from 'react';
import "./we-offer.css"
import BigButton from "../../Buttons/Big-button/BigButton";
import ProductCard from "../../Product-card/ProductCard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IProduct} from "../../../types/productTypes";
import {NavLink} from "react-router-dom";
const WeOffer = () => {
    const {products, loading} = useTypedSelector(state => state.products)
    let last_products: IProduct[] = []
    if (products.length !== 0) {
        last_products = [products[0], products[1], products[2], products[3]]
    }
    return (
        <div className={"we-offer"} >
            <div className="container">
                <div className="we-offer-content">
                    <div className="we-offer-information">
                        <div className="we-offer-text">
                            <h4>Offer</h4>
                            <h2 style={{color: "#ffff"}} >We Offer Organic For You</h2>
                        </div>
                        <NavLink to={"/shop"}>
                            <BigButton button_color={"#EFD372"} text_color={"#274C5B"} text={"View All Product"}/>
                        </NavLink>
                    </div>
                    <div className="we-offer-cards">
                        {products.length == 0  ?  "":
                            last_products.map((product, index) => {
                                return <ProductCard
                                    productClass={product.productClass}
                                    img={product.img}
                                    productName={product.productName}
                                    price={product.price}
                                    rating={5}
                                    productDescription={product.productDescription}
                                    detailInfo={product.detailInfo}
                                    additionalInfo={product.additionalInfo}
                                    index={product._id}
                                />
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeOffer;