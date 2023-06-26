import {Route, Routes} from "react-router-dom";
import HomePage from "./conponens/HomePage/HomePage";
import AboutPage from "./conponens/AboutPage/AboutPage";
import ShopPage from "./conponens/ShopPage/ShopPage";
import SingleProduct from "./conponens/SingleProduct-page/SingleProduct";
import ServicesPage from "./conponens/ServicesPage/ServicesPage";
import NewsPage from "./conponens/NewsPage/NewsPage";
import BasketPage from "./conponens/ListOfFavorites/BasketPage";
import OurTeamPage from "./conponens/OurTeamPage/OurTeamPage";

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
        </Routes>
    );
}