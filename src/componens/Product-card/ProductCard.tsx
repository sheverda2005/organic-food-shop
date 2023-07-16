import React, {FC} from 'react';
import "./product-card.css"
import ProductCardStar from "./ProductCardStar";
import {NavLink} from "react-router-dom";

interface IProductCard {
    productClass: string
    img: string
    productName: string
    price: string
    rating: number | null
    detailInfo: string
    productDescription: string
    additionalInfo: string
    index: string
}
const ProductCard: FC<IProductCard> = ({productClass, img, productName, price , rating, index }) => {
    return (
        <div className={"product-card"} >
            <NavLink to={`/single-product/${index}`}>
                <div className="product-card-information">
                    <button className="prodcutsClass">
                        {productClass}
                    </button>
                    <div className="product-photo">
                        <img src={`https://organic-food-shop-server.vercel.app/api/getImage/${img}`}  height={"200px"} alt="Product"/>
                    </div>
                    <p className={"productsName"} >
                        <span>{productName}</span>
                    </p>
                    <div className="products-price-rating">
                        <div className="product-price">
                            {"$"}{price}
                        </div>
                        <div className="product-rating">
                            <ProductCardStar/>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductCard;