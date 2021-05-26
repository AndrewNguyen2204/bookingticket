import React from 'react';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeMovies from './HomeMovies/HomeMovies';
import HomeCinemas from './HomeCinemas/HomeCinemas';




export default function Home() {

    

    return (
        <div className="w-full">
            <HomeCarousel/>
            <HomeMovies />
            <HomeCinemas />
        </div>
    )
}
