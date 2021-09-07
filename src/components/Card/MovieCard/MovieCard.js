import { faCaretRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Rating from '../../Rating/Rating';
import "./MovieCard.css";
import { Button } from '../../Button/Button';




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
                        <span className="fantasy">{moment(ngayKhoiChieu).format('DD-MM-YYYY')}</span>

                    </div>
                   
                    <div className="button">

                        <NavLink to="/home" className="btn-trailer"><FontAwesomeIcon className="btn-play" icon={faCaretRight} /></NavLink>
                        <Button buttonStyle="btn--outline">
                            <NavLink to={`/detail/${maPhim}`}>Buy Ticket</NavLink>
                        </Button>


                    </div>
                </div>
            </div>

        </div>

    )
}
