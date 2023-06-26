import React from 'react';
import "./all-products.css"
import ProductCard from "../../Product-card/ProductCard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
const AllProducts = () => {
    const  {products} = useTypedSelector(state => state.products)
    return (
        <div className={"all-products"} >
            <div className="container">
                <div className="all-products-content">
                    {products.length == 0 ? "" : products.map((product, index) => {
                        return <ProductCard
                            productClass={product.productClass}
                            img={product.img}
                            productName={product.productName}
                            price={product.price}
                            rating={5}
                            additionalInfo={product.additionalInfo}
                            productDescription={product.productDescription}
                            detailInfo={product.detailInfo}
                            index={product._id}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;