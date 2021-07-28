import React, { useEffect, useState } from 'react'
import './Detail.css';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesDetails } from '../../redux/actions/CinemaAction';
import Rating from '../../components/Rating/Rating';
import _ from 'lodash';
import moment from 'moment';
import { NavLink } from 'react-router-dom';



export default function Detail(props) {

    const { heThongRapChieu, tenPhim, danhGia, hinhAnh } = useSelector(state => state.MovieReducer.movieDetails);
    console.log({heThongRapChieu});
    const dispatch = useDispatch();

    const [active, setActive] = useState(0);

    useEffect(() => {
        let { id } = props.match.params;

        dispatch(getMoviesDetails(id));
    }, []);

    const handleClickLogos = (index) => {
        setActive(index);

    }
    const renderLogos = () => {
        return heThongRapChieu?.map((cinemas, index) => {
            return <li key={index} className={index === active ? "active" : ""}><img src={cinemas.logo} alt={cinemas.maHeThongRap} onClick={() => {
                handleClickLogos(index);
            }} /></li>
        });
    }

    const renderShowtimes = (list) => {


        const showtimes = _.map(list, lichChieu => ({
            showtime: moment(lichChieu.ngayChieuGioChieu).format('hh:mm A'),
            showtimeId: lichChieu.maLichChieu
        }));

        return _.uniqBy(showtimes,'showtime')?.map((item, index) => {
            return <NavLink to={`/checkout/${item.showtimeId}`} key={index}>{item.showtime.slice(0, -2)}<small>{item.showtime.slice(-2)}</small></NavLink>
        })

    }

    const renderCinemas = () => {

        let cinemas = [];
        if (heThongRapChieu) {
            cinemas = heThongRapChieu[active]?.cumRapChieu;
        }


        return cinemas?.map((cinema, index) => {
            return <div key={index} className="w-full px-10 py-2">

                <div className="flex">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-10 sm:w-10 sm:mb-0">
                        <img src={cinema.hinhAnh} className="w-full h-full" />
                    </div>
                    <div className="ml-2">
                        <h2 className="text-xs md:text-sm font-semibold">{cinema.tenCumRap}</h2>
                        <span className="text-xs">
                            {cinema.diaChi}
                        </span>
                    </div>
                </div>
                <div className="showtimes mt-2">
                    {renderShowtimes(cinema.lichChieuPhim)}
                </div>
            </div>
        })
    }




    return (
        <section className="detail" style={{ backgroundImage: `url(${hinhAnh})` }}>
            <div className="detail-container pt-48 pb-20">
                <div className=" container mx-auto detail-content w-full flex flex-col md:flex-row justify-around items-center">
                    <div className="detail-left w-full md:w-3/5 flex justify-end items-center mb-8 p-2">
                        <div className="left-content flex items-center">
                            <img style={{ width: 300, height: 400 }} src={hinhAnh} alt="movie" />
                            <div className="movie-details text-white ml-4">
                                <p>30.04.2021</p>
                                <h2 className="text-4xl my-4">{tenPhim}</h2>
                                <p>100 minutes - 2D/digital</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-right w-2/5 h-full flex justify-center items-center">
                        <div className="detail-rating flex flex-col items-center">
                            <div className="circle-chart">
                                <ProgressBar
                                    size={120}
                                    progress={danhGia > 5 ? danhGia : danhGia * 2}
                                    strokeWidth={10}
                                    circleOneStroke={'rgba(0,0,0,0.2)'}
                                    circleTwoStroke={'orange'}
                                />
                            </div>
                            <Rating value={danhGia > 5 ? 5 : danhGia} />
                        </div>
                    </div>
                </div>
                <div className="movie-infomations container mx-auto  text-white mt-8">
                    <ul className="types mb-10 flex justify-center items-center">
                        <li><span>Infomation</span></li>
                        <li><span>Comement</span></li>
                        <li className="active"><span>Showtimes</span></li>
                    </ul>
                    <div className="showtimes-content flex w-full bg-black bg-opacity-60 rounded-md">
                        <div className="content-left">
                            <ul>
                                {renderLogos()}
                            </ul>

                        </div>
                        <div className="content-right">
                            {renderCinemas()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
