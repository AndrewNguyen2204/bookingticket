import { faCaretRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Rating from '../../Rating/Rating';
import "./MovieCard.css";
export default function MovieCard(props) {
    const { hinhAnh, tenPhim, trailer, moTa, ngayKhoiChieu, danhGia, maPhim } = props.movie;
    return (
        <div className="card mx-auto glass">
            <div className="poster">
                <img src={hinhAnh} alt={tenPhim} />
                <div className="details">
                <h2>{tenPhim}</h2>
                <Rating value={danhGia} text />
                <div className="tags">
                    <span className="fantasy">{ngayKhoiChieu}</span>

                </div>
                <div className="info">
                    <p>{moTa.length <= 80 ? moTa : moTa.slice(0, 80) + '...'}</p>
                </div>
                <div className="button">
                    <NavLink to="/home" className="btn-trailer"><FontAwesomeIcon className="btn-play" icon={faCaretRight} /></NavLink>
                    <NavLink to={`/detail/${maPhim}`} className="btn-booking w-full text-center">Buy Ticket</NavLink>
                </div>
            </div>
            </div>
            
        </div>

    )
}
