import { React } from "react";
import Carousel from "./Carousel/Carousel";
import './Slider.css'

const Slider = () => {
    return (
        <div className="container-for-sliders-main-page">
        <Carousel>
         <div className="item item-1">Item 1</div>
         <div className="item item-2">Item 2</div>
         <div className="item item-3">Item 3</div>
        </Carousel>
        </div>
    )
}

export default Slider;