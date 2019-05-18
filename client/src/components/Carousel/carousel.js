import React from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import imgl1 from "./imgl1.jpg";
import "./style.css";


function Carousel() {
    return (
       
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            {/* The slideshow */}
            <div className="carousel-inner">
            <div className="overlay1">
                <div className="carousel-item active">
                    <img src={img1} className="img-fluid d-block w-100" alt="img1" height="500" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Community</h5>
                        <p>add some text here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="img-fluid d-block w-100" alt="img2" height="500" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Community</h5>
                        <p>add some text here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={imgl1} className="img-fluid d-block w-100" alt="img3" height="500" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Community</h5>
                        <p>add some text here</p>
                    </div>
                </div>
            </div>

            {/* Left and right controls  */}
            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
            </div>
        </div>

    )
}

export default Carousel;
