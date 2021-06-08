import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../../components/Card/MovieCard/MovieCard';
import Carousel from '../../../components/Carousel/Carousel';
import { getMoviesAction } from '../../../redux/actions/MovieAction';
import { RESET_MOVIES } from '../../../redux/types/MovieType';
import "./HomeMovies.css";
export default function HomeMovies() {

    /** useSelector, useDispatch */
    const { movies } = useSelector(state => state.MovieReducer);

    const dispatch = useDispatch();

    /** useState */

    const [isActive, setIsActive] = useState(true);

    const [show, setShow] = useState(0);

    /** Render Function */

    const renderMovies = () => {

        return movies.map((movie, index) => {

            return (
                <div className="p-2" key={index}>
                    <MovieCard movie={movie} />
                </div>
            )
        });

    }

    const reRenderMovies = (key) => {
        setIsActive(!isActive);
        dispatch({
            type: RESET_MOVIES,
            key
        })
    }

    /** Reponsive */

    const showCard = () => {
        let width = window.innerWidth;

        if (width < 768) {
            setShow(1)
        } else if (width <= 1040) {
            setShow(2)
        } else if (width <= 1260) {
            setShow(3)

        } else {
            setShow(4)
        }
    }
    window.addEventListener('resize', showCard);

    /** useEffect */

    useEffect(() => {

        dispatch(getMoviesAction());

        showCard()

    }, [])

    return (
        <div className="Movies">

            <ul className="types mb-5">
                <li className={isActive ? "active" : ""} onClick={() => { reRenderMovies(true) }}><span>Now Showing</span></li>
                <li className={!isActive ? "active" : ""} onClick={() => { reRenderMovies(false) }}><span >Coming Soon</span></li>
            </ul>

            <Carousel show={show}>
                {renderMovies()}
            </Carousel>

        </div>
    )
}
