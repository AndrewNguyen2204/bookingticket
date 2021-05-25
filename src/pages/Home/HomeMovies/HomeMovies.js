import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../../components/Card/MovieCard/MovieCard';
import Carousel from '../../../components/Carousel/Carousel';
import { getMoviesAction } from '../../../redux/actions/MovieAction';
import { RESET_MOVIES } from '../../../redux/types/MovieType';
import "./HomeMovies.css";
export default function HomeMovies() {

    const { movies } = useSelector(state => state.MovieReducer);

    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(true);

    const renderMovies = () => {

        return movies.map((movie, index) => {

            return (
                <div className="p-2" key={index}>
                    <MovieCard movie={movie} />
                </div>
            )
        });

    }

    const resetMovies = (key) => {
        setIsActive(!isActive);
        dispatch({
            type: RESET_MOVIES,
            key
        })
    }

    useEffect(() => {
        dispatch(getMoviesAction());
    }, [dispatch])

    return (
        <div className="Movies">

            <ul className="types mb-5">
                <li className={isActive ? "active" : ""} onClick={() => { resetMovies(true) }}><span>Now Showing</span></li>
                <li className={!isActive ? "active" : ""} onClick={() => { resetMovies(false) }}><span >Coming Soon</span></li>
            </ul>

            <Carousel show={4}>
                {renderMovies()}
            </Carousel>

        </div>
    )
}
