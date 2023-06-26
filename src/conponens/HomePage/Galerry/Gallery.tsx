import React from 'react';
import "./gallery.css"
const Gallery = () => {
    return (
        <div className={"gallery"} >
            <div className="container">
                <div className="gallery-content">
                    <div className="gallery-content-card">
                        <div className="gallery-content-card-content">
                            Organic Juice
                        </div>
                    </div>
                    <div className="gallery-content-card">
                        <div className="gallery-content-card-content">
                            Organic Food
                        </div>
                    </div>
                    <div className="gallery-content-card">
                        <div className="gallery-content-card-content">
                            Nuts Cookis
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;