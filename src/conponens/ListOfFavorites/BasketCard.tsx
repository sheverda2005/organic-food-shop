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
                <img src={`http://localhost:5000/api/getImage/${img}`} width={'200px'}  height={'200px'} alt="Product"/>
                <div className="basket-card-text">
                    <h2 style={{fontSize: '30px'}} >{productName}</h2>
                    <div className="basket-card-settings">
                        <input type="number" value={quantity} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketCard;