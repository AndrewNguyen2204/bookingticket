import React from 'react'
import _ from 'lodash';


export default function ShowTime(props) {

    const { movie } = props;

    const renderShowTimes = () => {
        let showtimes = [];

        movie.lstLichChieuTheoPhim.forEach(showtime => {

            showtimes = [...showtimes, showtime.ngayChieuGioChieu.slice(-5)];
        });

        return _.uniq(showtimes).map((showtime, index) => {
            return <span key={index}>{showtime}</span>
        })

    }



    return (
        <div className="showtime-content">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-10 sm:w-10 sm:mb-0">
                <img src={movie.hinhAnh} alt={movie.tenPhim} />
            </div >
            <div className="flex w-full">
                <div className="w-full">
                    <h2 className="text-sm font-semibold">{movie.tenPhim}</h2>
                    <span className="text-sm text-coolGray-600">{movie.sapChieu ? "Coming Soon" : "Now Showing"}</span>
                    <span className="text-sm text-red-600 ml-2 bg-black px-2 rounded-md">{movie.hot ? "Hot !" : ""}</span>
                    <div className="showtime-details">
                        {renderShowTimes()}                        
                    </div>
                </div>
            </div>
        </div>
    )
}
