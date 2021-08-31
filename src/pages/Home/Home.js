import React, { useEffect } from 'react';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeMovies from './HomeMovies/HomeMovies';
import HomeCinemas from './HomeCinemas/HomeCinemas';
import { useDispatch, useSelector } from 'react-redux';
import { getBannersAction } from '../../redux/actions/CarouselAction';
import { getMoviesAction } from '../../redux/actions/MovieAction';
import { getCinemasDataAction } from '../../redux/actions/CinemaAction';


export default function Home() {
    

     /** useSelector, useDispatch */
     const { movies } = useSelector(state => state.MovieReducer);
     const { banners } = useSelector(state => state.CarouselReducer);
     const { cinemasData } = useSelector(state => state.CinemaReducer);
     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBannersAction());

        dispatch(getMoviesAction());

        dispatch(getCinemasDataAction());

    }, []);

    return (
        <section className="home-section w-full">
            <HomeCarousel banners={banners}/>
            <HomeMovies movies ={movies} />
            <HomeCinemas cinemasData ={cinemasData} />
        </section>
    )
}
