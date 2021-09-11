import moment from 'moment';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Rating from '../../Rating/Rating';
import "./MovieCard.css";
import { Button } from '../../Button/Button';




export default function MovieCard({movie, onClick}) {
    
    
    const { hinhAnh, tenPhim, trailer, ngayKhoiChieu, danhGia, maPhim } = movie;

    const handlePlay= () => {
        onClick(trailer);
    }



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

                        <button onClick={handlePlay} className="btn-trailer"><ion-icon name="play"></ion-icon></button>
                        <Button buttonStyle="btn--outline">
                            <NavLink to={`/detail/${maPhim}`}>Buy Ticket</NavLink>
                        </Button>


                    </div>
                </div>
            </div>

        </div>

    )
}
