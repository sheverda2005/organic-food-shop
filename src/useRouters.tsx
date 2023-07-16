import {Route, Routes} from "react-router-dom";
import HomePage from "./componens/HomePage/HomePage";
import AboutPage from "./componens/AboutPage/AboutPage";
import ShopPage from "./componens/ShopPage/ShopPage";
import SingleProduct from "./componens/SingleProduct-page/SingleProduct";
import ServicesPage from "./componens/ServicesPage/ServicesPage";
import NewsPage from "./componens/NewsPage/NewsPage";
import BasketPage from "./componens/ListOfFavorites/BasketPage";
import OurTeamPage from "./componens/OurTeamPage/OurTeamPage";
import PlaceAnOrder from "./componens/PlaceAnOrderPage/PlaceAnOrder";

export const useRouters = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>} />
            <Route path={'/about'} element={<AboutPage/>} />
            <Route path={'/shop'} element={<ShopPage/>} />
            <Route path={"/single-product/:id"}  element={<SingleProduct/>} />
            <Route path={"/services"} element={<ServicesPage/>} />
            <Route path={"/news"} element={<NewsPage/>} />
            <Route path={"/basket"} element={<BasketPage/>} />
            <Route path={"/our-team"} element={<OurTeamPage/>} />
            <Route path={"/place-an-order"} element={<PlaceAnOrder/>} />
        </Routes>
    );
}