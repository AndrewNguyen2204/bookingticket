import React from 'react';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeMovies from './HomeMovies/HomeMovies';
import HomeTheaters from './HomeTheaters/HomeTheaters';




export default function Home() {

    

    return (
        <div className="w-full">
            <HomeCarousel/>
            <HomeMovies />
            <HomeTheaters />
        </div>
    )
}
