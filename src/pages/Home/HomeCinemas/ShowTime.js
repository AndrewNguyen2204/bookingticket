import React from 'react'
import _ from 'lodash';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

export default function ShowTime(props) {

    const { movie } = props;

    const renderShowTimes = () => {

        const { lstLichChieuTheoPhim } = movie;

        const showtimes = _.map(lstLichChieuTheoPhim, lichChieu => ({
            showtime: moment(lichChieu.ngayChieuGioChieu).format('hh:mm A'),
            showtimeId: lichChieu.maLichChieu
        }));

        return _.uniqBy(showtimes, 'showtime').map((item, index) => {
            return <NavLink to={`/checkout/${item.showtimeId}`} key={index}>{item.showtime.slice(0, -2)}<small>{item.showtime.slice(-2)}</small></NavLink>
        })

    }



    return (
        <div className="showtime-content py-2 opacity-50 hover:opacity-100">
            <div className="flex-shrink-0 mb-2 sm:h-12 sm:w-12 w-8 h-8 sm:mb-6">
                <img src={movie.hinhAnh} alt={movie.tenPhim} />
            </div >
            <div className="flex w-full">
                <div className="w-full">
                    <div>
                        <h2 className="text-sm font-semibold">{movie.tenPhim}</h2>
                        <span className="text-sm text-yellow-600">{movie.sapChieu ? "Coming Soon" : "Now Showing"}</span>
                        <span className={`text-sm text-white ml-2 bg-red-600 px-2 rounded-md ${movie.hot ? "" : "hidden"}`}>Hot !</span>
                    </div>
                    <div className="showtime-details">
                        {renderShowTimes()}
                    </div>
                </div>
            </div>
        </div>
    )
}
