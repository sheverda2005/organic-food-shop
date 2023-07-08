import React, {FC} from 'react';
import "./basket-card.css"
import BigButton from "../Buttons/Big-button/BigButton";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IBasketCard {
    productName: string
    quantity: number
    img: string
    id: string
}

const BasketCard: FC<IBasketCard> = ({productName, quantity, img, id}) => {
    const {deleteProduct} = useActions()
    const {items} = useTypedSelector(state => state.basket)
    return (
        <div className={"basket-card"}>
            <div className="basket-card-content">
                <div className="basket-card-content-img">
                    <img src={`https://organic-food-shop-server.vercel.app/api/getImage/${img}`} height={'200px'}
                         alt="Product"/>
                </div>
                <div className="basket-card-text">
                    <h2 style={{fontSize: '30px'}}>{productName}</h2>
                    <div className="basket-card-settings">
                        <input type="number" defaultValue={quantity}/>
                       <div onClick={()=> deleteProduct(id, items)} className="delete-product-button">
                           <BigButton  button_color={"#274C5B"} text_color={"#fff"} text={"delete"}/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketCard;