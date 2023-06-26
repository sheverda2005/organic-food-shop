import React from 'react';
import "./home-page-news.css"
import BigButton from "../../Buttons/Big-button/BigButton";
import NewsCard from "../../News-card/NewsCard";
const HomePageNews = () => {
    return (
        <div className={"home-page-news"} >
            <div className="container">
                <div className="home-page-news-content">
                    <div className="home-page-news-information">
                        <div className="home-page-news-titles">
                            <h4>News</h4>
                            <h2>Discover weekly content about organic food, & more </h2>
                        </div>
                        <BigButton button_color={"#274C5B"} text_color={"#fff"} text={"More Mews"}/>
                    </div>
                    <div className="news-cards">
                        <NewsCard
                            date={ {day: 25, month: "Nov"} }
                            img={"/image/News-card.png"}
                            author={"By Rachi Card"}
                            title={"The Benefits of Vitamin D & How to Get It"}
                            sub_title={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}
                        />
                        <NewsCard
                            date={ {day: 25, month: "Nov"} }
                            img={"/image/News-card.png"}
                            author={"By Rachi Card"}
                            title={"The Benefits of Vitamin D & How to Get It"}
                            sub_title={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageNews;