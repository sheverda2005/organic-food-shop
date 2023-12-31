import React, {useEffect} from 'react';
import './App.css';
import NavBar from "./componens/NavBar-componens/NavBar";
import {BrowserRouter} from "react-router-dom";
import {useRouters} from "./useRouters";
import Footer from "./componens/Footer/Footer-component/Footer";
import {useActions} from "./hooks/useActions";
import NavBarFixed from "./componens/NavBar-componens/NavBarFixed/NavBarFixed";
import {useTypedSelector} from "./hooks/useTypedSelector";
import NavBarModal from "./componens/NavBar-componens/NavBarModal/NavBarModal";
import Error from "./componens/Error/Error";

function App() {
    const {getProducts, addBasketItems} = useActions()
    const {items} = useTypedSelector(state => state.basket)
    const {menu_button_button} = useTypedSelector(state => state.menuBurger)
    const {message, active} = useTypedSelector(state => state.error)
    useEffect( ()=> {
        addBasketItems()
        getProducts()
    }, [])
  return (
    <div className="App">
        <BrowserRouter>
            <NavBarFixed/>
            <NavBar/>
            {active ?  <Error message={message} active={active}/>: null}
            <NavBarModal active={menu_button_button.active} />
            {useRouters()}
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
