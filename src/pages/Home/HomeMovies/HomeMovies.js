import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import MovieCard from '../../../components/Card/MovieCard/MovieCard';
import Carousel from '../../../components/Carousel/Carousel';
import VideoModal from '../../../components/VideoModal/VideoModal';

import { RESET_MOVIES } from '../../../redux/types/MovieType';
import "./HomeMovies.css";
export default function HomeMovies(props) {

    /** useSelector, useDispatch */
    const dispatch = useDispatch();
    /** useState */

    const [isActive, setIsActive] = useState(true);

    const [show, setShow] = useState(0);

    const [modal, setModal] = useState({
        open: false,
        url: ''
    });

    const openModal = (url) => {
        setModal({
            open: true,
            url
        })
    }

    const closeModal = () => {
        setModal({
            ...modal, open: false
        })
    }

    /** useEffect */

    useEffect(() => {

        showCard()

    }, [])


    /** Render Function */

    const { movies } = props;

    const renderMovies = () => {

        return movies.map((movie, index) => {

            return (
                <div className="p-2" key={index}>
                    <MovieCard movie={movie} onClick={openModal} />
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

        } else if (width <= 1900) {
            setShow(4)
        } else {
            setShow(6)
        }
    }
    window.addEventListener('resize', showCard);



    return (
        <div className="movies">

            {modal.open && <VideoModal url={modal.url} callback={closeModal} />}

            <ul className="types mb-10 flex justify-center">
                <li className={isActive ? "active" : ""} onClick={() => { reRenderMovies(true) }}><span>Now Showing</span></li>
                <li className={!isActive ? "active" : ""} onClick={() => { reRenderMovies(false) }}><span >Coming Soon</span></li>
            </ul>

            <Carousel show={show}>
                {renderMovies()}
            </Carousel>

        </div>
    )
}
