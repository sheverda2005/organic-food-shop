import React, {useEffect} from 'react';
import './App.css';
import NavBar from "./conponens/NavBar-componens/NavBar";
import {BrowserRouter} from "react-router-dom";
import {useRouters} from "./useRouters";
import Footer from "./conponens/Footer/Footer-component/Footer";
import {useActions} from "./hooks/useActions";
import NavBarFixed from "./conponens/NavBar-componens/NavBarFixed/NavBarFixed";
import {IBasketItem} from "./types/basketTypes";
import {useTypedSelector} from "./hooks/useTypedSelector";
import NavBarModal from "./conponens/NavBar-componens/NavBarModal/NavBarModal";

function App() {
    const {getProducts, addBasketItems} = useActions()
    const {items} = useTypedSelector(state => state.basket)
    const {menu_button_button} = useTypedSelector(state => state.menuBurger)
    useEffect( ()=> {
        addBasketItems()
        getProducts()
    }, [])
  return (
    <div className="App">
        <BrowserRouter>
            <NavBarFixed/>
            <NavBar/>
            <NavBarModal active={menu_button_button.active} />
            {useRouters()}
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
