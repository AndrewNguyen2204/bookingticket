import React, { useEffect, useRef, useState } from 'react'
import "./HomeCarousel.css";





export default function HomeCarousel(props) {

    const { banners } = props;


    const [current, setCurrent] = useState(0);

    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        if (props.autoPlay !== null) {
            const interval = setInterval(play, props.autoPlay * 1000);

            return () => clearInterval(interval);
        }


    }, [props.autoPlay]);


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
                <span key={index} className={index === current ? "dot active" : "dot"} abc={index} onClick={() => { handleClickDots(index) }}></span>
            )
        })
    }
    const handleClickDots = (i) => {

        setCurrent(i);

    }

    if (!Array.isArray(banners) || banners.length <= 0) {
        return null;
    }

    const renderSlide = () => {
        return banners.map((slide, index) => {
            return (


                <div key={index} className={index === current ? "slide active" : "slide"}>
                    {index === current && (<div className="banner" style={{backgroundImage:`url(${slide.hinhAnh})`,backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div>)}
                </div>

            )
        })
    }


    return (
        <>

            <div className="slider">
                <span className="prev-btn" onClick={prevSlide}><ion-icon name="chevron-back-outline"></ion-icon></span>
                <span className="next-btn" onClick={nextSlide} ><ion-icon name="chevron-forward-outline"></ion-icon></span>

                {renderSlide()}

                <div className="dots-box">
                    <div className="dots">
                        {renderDots()}
                    </div>
                </div>
            </div>
        </>
    )
}
