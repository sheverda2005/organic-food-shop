import React from 'react';
import "./products-cards.css"
import ProductCard from "../../../Product-card/ProductCard";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {IProduct} from "../../../../types/productTypes";
import Spinner from "../../../Spinner/Spinner";

const ProductsCards = () => {
    const {products, loading} = useTypedSelector(state => state.products)
    let last_products: IProduct[] = []
    if (products.length !== 0) {
        last_products = [products[0], products[1], products[2], products[3], products[4], products[5], products[6], products[7]]
    }
    return (
        <div className={"products-cards"} >
            {products.length == 0 ? "":
                last_products.map((product, index) => {
                    return <ProductCard
                        productClass={product.productClass}
                        img={product.img}
                        productName={product.productName}
                        price={product.price}
                        rating={5}
                        productDescription={product.productDescription}
                        additionalInfo={product.additionalInfo}
                        detailInfo={product.detailInfo}
                        index={product._id}
                    />
                })
            }
        </div>
    );
};

export default ProductsCards;