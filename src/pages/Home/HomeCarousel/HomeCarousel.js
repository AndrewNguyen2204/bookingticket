import React, { useState } from 'react'
import "./HomeCarousel.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';




export default function HomeCarousel(props) {

    const { banners } = props;


    const [current, setCurrent] = useState(0);



    const length = banners.length;

    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {

        setCurrent(current === 0 ? length - 1 : current - 1);

    }
    const renderDots = () => {
        return banners.map((banner, index) => {
            return (
                <span key={index} className={index === current ? "dot active" : "dot"} abc={index} onClick={()=>{handleClickDots(index)}}></span>
            )
        })
    }
    const handleClickDots = (i) => {

       setCurrent(i);

    }

    if (!Array.isArray(banners) || banners.length <= 0) {
        return null;
    }




    return (
        <>

            <div className="slider">
                <FontAwesomeIcon className="prev-btn" icon={faAngleLeft} onClick={prevSlide} />
                <FontAwesomeIcon className="next-btn" icon={faAngleRight} onClick={nextSlide} />
                {banners.map((slide, index) => {
                    return (


                        <div key={index} className={index === current ? "slide active" : "slide"}>
                            {index === current && (<img src='https://picsum.photos/1600/900'  alt={slide.hinhAnh} />)}
                        </div>

                    )
                })}
                <div className="dots">
                    {renderDots()}
                </div>
            </div>
        </>
    )
}
