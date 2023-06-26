import React from 'react';
import Header from "../Header/Header";

const NewsPage = () => {
    return (
        <div className={"news-page"}>
            <Header img={'/image/News-header.png'} title={"Recent News"}/>
        </div>
    );
};

export default NewsPage;