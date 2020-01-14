import React from "react";
import Slider from "react-slick";
import foto1 from "./images/1.jpg";
import foto2 from "./images/2.jpg";
import foto3 from "./images/3.jpg";
import './header.css';

class SimpleSlider extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 3900,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={foto1} alt="1"/>
                </div>
                <div>
                    <img src={foto2} alt="2"/>
                </div>
                <div>
                    <img src={foto3} alt="3"/>
                </div>
            </Slider>
        );
    }
}



export default SimpleSlider;