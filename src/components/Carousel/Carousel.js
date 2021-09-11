import React, { useEffect, useState } from 'react';
import "./Carousel.css";

const Carousel = (props) => {

    const { children, show } = props;


    /**  useState */

    const [currentIndex, setCurrentIndex] = useState(0);

    // add handler for onTouchStart

    const [touchPosition, setTouchPosition] = useState(null);

    const [length, setLength] = useState(children.length);

     /** useEffect */

     useEffect(() => {
        setLength(children.length);
    }, [children])

    /** Callback function */
    // handle next button
    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + show)
        }
    }
    // handle prev button
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - show)
        }
    }

    // handle onTouchStart
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    // handle onTouchMove
    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;

        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null);
    }

   
   

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* prev button */}
                {
                    currentIndex > 0 &&
                    <span onClick={prev} className="left-arrow"><ion-icon name="chevron-back-outline"></ion-icon></span>

                }


                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)`,width:`${(1/show)*100}%` }}>
                        {children}
                    </div>
                </div>

                {/* next button */}
                {
                    currentIndex < (length - show) &&
                    <span onClick={next} className="right-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></span>

                }
            </div>
        </div>
    )
}



export default Carousel;