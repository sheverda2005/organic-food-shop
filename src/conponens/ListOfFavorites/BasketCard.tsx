import React, {FC} from 'react';
import "./basket-card.css"

interface IBasketCard {
    productName: string
    quantity: number
    img: string
    id: string
}

const BasketCard: FC<IBasketCard> = ({productName, quantity, img, id}) => {
    console.log(img)
    return (
        <div className={"basket-card"} >
            <div className="basket-card-content">
                <div className="basket-card-content-img">
                    <img src={`https://organic-food-shop-server.vercel.app/api/getImage/${img}`}  height={'200px'} alt="Product"/>
                </div>
                <div className="basket-card-text">
                    <h2 style={{fontSize: '30px'}} >{productName}</h2>
                    <div className="basket-card-settings">
                        <input type="number" defaultValue={quantity} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketCard;