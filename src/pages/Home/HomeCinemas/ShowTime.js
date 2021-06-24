import React from 'react'
import _ from 'lodash';
import moment from 'moment';

export default function ShowTime(props) {

    const { movie } = props;

    const renderShowTimes = () => {
       
        const {lstLichChieuTheoPhim} = movie;
        const showtimes =  _.map(lstLichChieuTheoPhim,showtime => moment(showtime.ngayChieuGioChieu).format('hh:mm A'));
        
        return _.uniq(showtimes).map((showtime, index) => {
            return <span key={index}>{showtime.slice(0,-2)}<small>{showtime.slice(-2)}</small></span>
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
                    <span className={`text-sm text-white ml-2 bg-yellow-600 px-2 rounded-md ${movie.hot ? "" : "hidden"}`}>Hot !</span>
                    <div className="showtime-details">
                        {renderShowTimes()}
                    </div>
                </div>
            </div>
        </div>
    )
}
