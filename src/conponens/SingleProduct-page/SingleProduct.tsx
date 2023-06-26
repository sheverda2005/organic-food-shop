import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IProduct} from "../../types/productTypes";
import "./single-product.css"
import Header from "../Header/Header";
import ProductCardStar from "../Product-card/ProductCardStar";
import {useActions} from "../../hooks/useActions";
import ProductCard from "../Product-card/ProductCard";

const SingleProduct = () => {
    const {addToCardFalse, addToCardTrue} = useActions()
    const {addedToCard} = useTypedSelector(state => state.addToCardButton)
    useEffect(() => {
        window.scrollTo(0, 0);
        addToCardFalse()
        checkProductBasket()
    }, []);
    function scrollTo() {
        window.scrollTo(0, 200);
    }
    const {id} = useParams()
    const {products, loading} = useTypedSelector(state => state.products)
    const {addBasketItems} = useActions()
    const [quantity, setQuantity] = useState<any>(1)
    let product: IProduct[] = []
    if (products.length !== 0) {
        product = products.filter(item => {
            if (item._id == id) return item
        })
    }
    useEffect(()=> {
        addToCardFalse()
        checkProductBasket()
    }, [product[0]])
    const {productDescriptionDispatch, additionalInfoDispatch} = useActions()
    const {productDescription, additionalInfo} = useTypedSelector(state => state.infoButtonsProduct)
    const related_products = products.filter(item => {
        if (item._id !== id) {
            return item;
        }
    })
    let some_products: IProduct[] = []
    if (!loading) {
        some_products = [related_products[0], related_products[1], related_products[2], related_products[3]]
    }
    let product_local_storage: any = []
    product_local_storage.push(product[0])
    product_local_storage.push({quantity: +quantity})
    function localStorageProduct() {
        localStorage.setItem(product[0].productName, JSON.stringify(product_local_storage))
    }
    const {items} = useTypedSelector(state => state.basket)
    function checkProductBasket() {
        items.forEach(item => {
            if(item[0]._id == product[0]._id) {
                addToCardTrue()
            }
        })
    }

    return (
        <div className={'single-product'} >
            <Header img={"/image/Shop_single.jpg"} title={"Shop Single"}/>
            {products.length == 0 ? " " :
                <div className="single-product-container">
                    <div className={"single-product-content"} >
                        <div className="product-general-info">
                            <div className="product-image">
                                <button className="products-class">
                                    {product[0].productClass}
                                </button>
                                <img src={`https://organic-food-shop-server.vercel.app/api/getImage/${product[0].img}`} height={"400"} alt="Product"/>
                            </div>
                            <div className="product-general-text">
                                <h2 style={{fontSize: "40px"}} >{product[0].productName}</h2>
                                <ProductCardStar/>
                                <div className="product-general-text-price">{"$"+product[0].price}</div>
                                <p>
                                    {product[0].detailInfo}
                                </p>
                                <div className="add-to-card">
                                    <p>Quantity :</p>
                                    <input defaultValue={1} onChange={(event)=> {
                                        if (+event.target.value < 1) {
                                            setQuantity(1)
                                        } else {
                                            setQuantity(event.target.value)
                                        }
                                    }} type="number"/>
                                    <div onClick={()=> {
                                        localStorageProduct()
                                        addBasketItems()
                                        addToCardTrue()
                                    }
                                    } className="add-to-card">
                                        <button disabled={addedToCard}   style={{backgroundColor: addedToCard ? "#EFF6F1": "#274C5B"}} className={"big-button"} >
                                            <div style={{color: addedToCard ? "#274C5B" : "#fff"}} >
                                                {addedToCard ? 'Added to Card': "Add to Card"}
                                            </div>
                                            {addedToCard ? "" :
                                                <div className="big-button-svg">
                                                <svg width="8" height="7" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                              </div>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addition-info">
                           <button onClick={()=> {
                               additionalInfoDispatch()
                           }} className={`addition-info-button ${ productDescription? "active": "" }`} >
                               Product Description
                           </button>
                            <button onClick={()=> {
                                productDescriptionDispatch()
                            }} className={`addition-info-button ${additionalInfo? "active": ''}`} >
                                Additional Info
                            </button>
                        </div>
                        <div className="addition-info-text">
                            {productDescription ? <p>
                                    {product[0].productDescription}
                                </p> :
                                <p>
                                    {product[0].additionalInfo}
                                </p>
                            }
                        </div>
                    </div>
                    <div className="related_products">
                        <h2 style={{fontSize: "37px"}} >Related Products</h2>
                        <div className="related_product">
                            {some_products.map(item => {
                                return <div onClick={()=> scrollTo()} className={'product-card-single'} >
                                    <ProductCard
                                        productClass={item.productClass}
                                        img={item.img}
                                        productName={item.productName}
                                        price={item.price}
                                        rating={item.rating}
                                        detailInfo={item.detailInfo}
                                        productDescription={item.productDescription}
                                        additionalInfo={item.additionalInfo}
                                        index={item._id}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleProduct;