import React, {useEffect} from 'react';
import Header from "../Header/Header";
import "./servicesPage.css"
const ServicesPage = () => {
    useEffect(()=> {
        window.scrollTo(0, 0)
    })
    return (
        <div className={"services-page"} >
            <Header img={"/image/Services.png"} title={"Services"}/>
            <div className="services-page-content">
                <h4>What we Grow</h4>
                <h2>Better Agriculture for <span> Better Future</span> </h2>
                <div className="services-page-content-info">
                    <div className={"services-content-items"}>
                        <div className="services-content-item">
                            <h5>Dairy Products</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>
                        <div className="services-content-item">
                            <h5>Store Services</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>
                        <div className="services-content-item">

                            <h5>Delivery Services</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>
                    </div>
                    <img className={"services-page-img"} src="/image/Services_photo.png" alt="Services"/>
                    <div className="services-content-items">
                        <div className="services-content-item right">
                            <h5>Agricultural Services</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>
                        <div className="services-content-item right">
                            <h5>Organic Products</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>
                        <div className="services-content-item right">
                            <h5>Fresh Vegetables</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundImage: "url(" + "/image/Everyday_fresh.jpg" + ")"
                }} className="everyday-fresh">
                    <div className="everyday-fresh-content">
                        <h4>Organic Only</h4>
                        <h2>Everyday Fresh & Clean</h2>
                        <p>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;