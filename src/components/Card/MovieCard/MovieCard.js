
import React from 'react'
import { NavLink } from 'react-router-dom';
import Rating from '../../Rating/Rating';
import "./MovieCard.css";
import { Button } from '../../Button/Button';




export default function MovieCard({ movie, onClick }) {


    const { hinhAnh, tenPhim, trailer, danhGia, maPhim } = movie;

    const handlePlay = () => {
        onClick(trailer);
    }



    return (
        <div className="card mx-auto glass">
            <div className="poster">
                <img src={hinhAnh} alt={tenPhim} />
                <div className="details">
                    <div className="details-top">
                        <div className="details-title">
                            <h2>{tenPhim}</h2>
                        </div>
                        <div className="tags">
                            <Rating value={danhGia} text starColor='#F5059D' />
                            <span>Action/Adventure</span>
                            <div className="w-full my-5">
                                <span className="px-2 py-1 bg-purple-500 text-white rounded-xl ml-2">PG-13</span>
                                <span className="px-2 py-1 bg-orange-500 text-white rounded-xl  ml-2">120 min</span>
                                <span className="px-2 py-1 bg-red-500 text-white rounded-xl  ml-2">CC</span>
                            </div>


                        </div>
                    </div>


                    <div className="details-bottom">

                        <button onClick={handlePlay} className="btn-trailer"><ion-icon name="play"></ion-icon></button>
                        <Button buttonStyle="btn--outline">
                            <NavLink to={`/detail/${maPhim}`}>Details</NavLink>
                        </Button>


                    </div>
                </div>
            </div>

        </div>

    )
}
