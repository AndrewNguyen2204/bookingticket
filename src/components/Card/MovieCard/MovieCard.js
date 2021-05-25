import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./MovieCard.css";
export default function MovieCard(props) {
    const { hinhAnh, tenPhim, trailer, moTa, ngayKhoiChieu, danhGia } = props.movie;
    return (
        <div className="card mx-auto">
            <div className="poster">
                <img src={hinhAnh} alt={tenPhim} />
            </div>
            <div className="details">
                <h2>{tenPhim}</h2>
                <div className="rating">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStarHalfAlt} />

                    <span>4/5</span>
                </div>
                <div className="tags">
                    <span className="fantasy">{ngayKhoiChieu}</span>

                </div>
                <div className="info">
                    <p>{moTa}</p>
                </div>
                <div className="button">
                    <NavLink to="/home" className="btn btn-trailer">Trailer</NavLink>
                    <NavLink to="/home" className="btn btn-booking">Book a Ticket</NavLink>
                </div>
            </div>
        </div>

    )
}
