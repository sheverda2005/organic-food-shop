import React, {FC} from 'react';
import "./find-product.css"
import {NavLink} from "react-router-dom";
import {useActions} from "../../hooks/useActions";

interface FindProduct {
    img: string
    productName: string
    id: string
}
const FindProduct: FC<FindProduct> = ({productName, img, id}) => {
    const {findProductClear} = useActions()
    return (
            <NavLink  to={`/single-product/${id}`} >
                <div onClick={()=> findProductClear()} className={'find-product'} >
                    <div className="find-product-content">
                        <div className="find-product-content-img">
                            <img src={`https://organic-food-shop-server.vercel.app/api/getImage/${img}`} height={'80px'}  alt="Product"/>
                        </div>
                        <p>{productName}</p>
                    </div>
                </div>
            </NavLink>
    );
};

export default FindProduct;