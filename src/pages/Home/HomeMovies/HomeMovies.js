import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./HomeMovies.css";
export default function HomeMovies() {

    const { movies } = useSelector(state => state.MovieReducer);

    const dispatch = useDispatch();

    const renderMovies = () => {
        return movies.map((movie, index) => {
            return (
                <div className="card">
                    <img className="img-top" src={movie.hinhAnh} alt={movie.hinhAnh} />
                    <div className="card-body">
                        <h2>{movie.tenPhim}</h2>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="Movies">

            <ul className="types">
                <li><a href="#">Action</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Horror</a></li>
            </ul>

            <div className="cards">
                {renderMovies()}
            </div>
        </div>
    )
}
