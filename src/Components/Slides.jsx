import { useState } from 'react';
import { dataSlides } from '../Data/dataSlides';

function Slides() {
    const [activeSlide, setActiveSlide] = useState(0);
    const { image, text } = dataSlides[activeSlide];

    const prevSlide = () => {
        setActiveSlide((prev => (prev === 0 ? dataSlides.length - 1 : prev - 1)));
    }

    const nextSlide = () => {
        setActiveSlide((prev => (prev === dataSlides.length - 1 ? 0 : prev + 1)));
    }

    return (
        <div className="slider-container">
            <div className="slide">
                <img src={image} alt="interior" className="slide-img" />
                <p className="slide-text">{text}</p>
            </div>
            <div className="slider-btns">
                <button className="change" onClick={prevSlide}>◀ Previous</button>
                <button className="change" onClick={nextSlide}>Next ▶</button>
            </div>
        </div>
    )
}

export default Slides;