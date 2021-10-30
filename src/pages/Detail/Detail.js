import React, { useEffect, useState } from 'react'
import './Detail.css';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesDetails } from '../../redux/actions/CinemaAction';
import Rating from '../../components/Rating/Rating';
import _ from 'lodash';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import VideoModal from '../../components/VideoModal/VideoModal';
import Breadcrumb from '../../components/Breadcrumd/Breadcrumb';


export default function Detail(props) {


    const { heThongRapChieu, tenPhim, danhGia, hinhAnh, ngayKhoiChieu, moTa, trailer } = useSelector(state => state.MovieReducer.movieDetails);

    const dispatch = useDispatch();

    const [modal, setModal] = useState({
        open: false,
        url: ''
    });

    const openModal = (url) => {
        setModal({
            open: true,
            url
        })
    }

    const closeModal = () => {
        setModal({
            ...modal, open: false
        })
    }


    const [tabActive, setTabActive] = useState({
        index: 1,
        tabContent: <Information info={{ tenPhim, trailer, moTa }} onClick={openModal} />
    });


    const { id } = props.match.params;


    useEffect(() => {


        dispatch(getMoviesDetails(id));

        window.scrollTo(0, 0)


    }, [dispatch, id]);

    const { location: { pathname } } = props;

    return (
        <section className="detail" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),url(${hinhAnh})` }}>
            {modal.open && <VideoModal url={modal.url} callback={closeModal} />}



            <div className="detail-container p-10">

                <Breadcrumb pathname={pathname} />

                <div className="container mx-auto detail-content w-full flex flex-col md:flex-row  justify-around items-center mt-10">
                    <div className="detail-left w-full md:w-3/5 flex justify-center md:justify-end items-center mb-8 p-2">
                        <div className="left-content flex flex-col md:flex-row items-center">
                            <div className="p-4 glass rounded-xl flex-1 mb-5 md:mb-0" style={{ minWidth: 200, minheight: 300, width: 300, height: 400 }}>
                                <img src={hinhAnh} alt="movie" className="w-full h-full" />
                            </div>
                            <div className="movie-details">
                                <p>{moment(ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                <h2>{tenPhim}</h2>
                                <p>2D/digital</p>

                            </div>
                        </div>
                    </div>
                    <div className="detail-right w-2/5 h-full flex justify-center items-center">
                        <div className="detail-rating flex flex-col items-center">
                            <div className="mb-4">
                                <h1 className="text-4xl text-white font-bold">Rating</h1>
                            </div>
                            <div className="circle-chart">
                                <ProgressBar
                                    size={120}
                                    progress={danhGia}
                                    strokeWidth={10}
                                    circleOneStroke={'rgba(255,255,255,0.2)'}
                                    circleTwoStroke={'#9e10eb'}
                                />
                            </div>
                            <Rating starColor="#f5059d" value={danhGia} />
                        </div>
                    </div>
                </div>
                <div className="movie-information w-[90%] min-h-full mx-auto glass  text-white mt-8 p-10 rounded-[30px]">
                    <ul className="mb-10 flex justify-start items-center">
                        <li
                            className={tabActive.index === 1 ? 'active' : ''}
                            onClick={() => {

                                let movieInfo = {
                                    tenPhim,
                                    trailer,
                                    moTa
                                }
                                setTabActive({
                                    index: 1,
                                    tabContent: <Information info={movieInfo} onClick={openModal} />
                                });

                            }}><span>Information</span></li>
                        <li
                            className={tabActive.index === 2 ? 'active' : ''}
                            onClick={() => {
                                setTabActive({
                                    index: 2,
                                    tabContent: heThongRapChieu[0] ? <ShowTimes heThongRapChieu={heThongRapChieu} /> : <p className="font-bold text-4xl text-center text-gray-400">Empty</p>
                                });
                            }}
                        ><span>Showtime</span></li>
                        <li
                            className={tabActive.index === 3 ? 'active' : ''}
                            onClick={() => {
                                setTabActive({
                                    index: 3,
                                    tabContent: <Review />
                                });

                            }}><span>Review</span></li>
                    </ul>
                    <div className="tab-content">
                        {tabActive.tabContent}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ShowTimes({ heThongRapChieu }) {

    const [active, setActive] = useState(0);

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

    const renderShowtime = (list) => {


        const showtimes = _.map(list, lichChieu => ({
            showtime: moment(lichChieu.ngayChieuGioChieu).format('hh:mm A'),
            showtimeId: lichChieu.maLichChieu
        }));

        return _.uniqBy(showtimes, 'showtime')?.map((item, index) => {
            return <NavLink to={`/checkout/${item.showtimeId}`} key={index}>{item.showtime.slice(0, -2)}<small>{item.showtime.slice(-2)}</small></NavLink>
        })

    }

    const renderCinemas = () => {

        let cinemas = [];
        if (heThongRapChieu) {
            cinemas = heThongRapChieu[active]?.cumRapChieu;
        }


        return cinemas?.map((cinema, index) => {
            return <div key={index} className="w-full py-2 opacity-50 hover:opacity-100">

                <div className="flex flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-10 sm:w-10 sm:mb-0">
                        <img src={cinema.hinhAnh} alt={cinema.hinhAnh} className="w-full h-full" />
                    </div>
                    <div className="ml-2">
                        <h2 className="text-xs sm:text-sm font-semibold">{cinema.tenCumRap}</h2>
                        <span className="text-xs">
                            {cinema.diaChi}
                        </span>
                    </div>
                </div>
                <div className="showtime mt-2">
                    {renderShowtime(cinema.lichChieuPhim)}
                </div>
            </div>
        })
    }

    return (
        <div className="showtime-content w-full flex flex-col sm:flex-row">

            <div className="showtime-left">
                <ul>
                    {renderLogos()}
                </ul>

            </div>
            <div className="showtime-right">
                {renderCinemas()}
            </div>
        </div>
    )

}

function Information({ info, onClick }) {


    const { tenPhim, moTa, trailer } = info;


    const handlePlay = () => {
        onClick(trailer);
    }


    return (
        <div className="w-full">
            <h1 className="text-4xl font-bold">{tenPhim}</h1>
            <div className="w-full my-5 flex flex-col">
                <span>Action/Adventure</span>
                <div className="mt-5">
                    <span className="px-2 py-1 bg-purple-500 text-white rounded-xl ml-2">PG-13</span>
                    <span className="px-2 py-1 bg-orange-500 text-white rounded-xl  ml-2">120 min</span>
                    <span className="px-2 py-1 bg-red-500 text-white rounded-xl  ml-2">CC</span>
                </div>
            </div>
            <Button buttonStyle="btn--outline" onClick={handlePlay}>
                <span>Trailer</span>
            </Button>
            <div className="mt-10">
                <p>Director: Unknown</p>
                <div className="flex my-4 items-center" >
                    <span>Cast & Crew: </span>
                    <div className="flex flex-col items-center justify-center ml-5">
                        <div className="flex -space-x-4">
                            <img alt="star-avatar" className="w-12 h-12 border rounded-full border-coolGray-300" src="https://source.unsplash.com/41x41/?portrait" />
                            <img alt="star-avatar" className="w-12 h-12 border rounded-full border-coolGray-300" src="https://source.unsplash.com/42x42/?portrait" />
                            <img alt="star-avatar" className="w-12 h-12 border rounded-full border-coolGray-300" src="https://source.unsplash.com/43x43/?portrait" />
                            <img alt="star-avatar" className="w-12 h-12 border rounded-full border-coolGray-300" src="https://source.unsplash.com/44x44/?portrait" />{/**/}
                            <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full bg-coolGray-50 text-coolGray-800 border-coolGray-300">+3</span>
                        </div>
                    </div>

                </div>
                <p>Movie Content: <span className="text-justify font-thin text-gray-400">{moTa}</span></p>
            </div>

        </div>
    )
}

function Review(props) {


    return (
        <div className="w-full">
            <div className="container glass flex flex-col p-8 shadow-sm rounded-xl lg:p-12">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                        <div className="flex space-x-3">
                            <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>
                            <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>
                            <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>
                            <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>
                            <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-coolGray-400">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>{/**/}
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea rows={3} placeholder="Message..." className="p-4 rounded-md resize-none text-coolGray-100 bg-white bg-opacity-25 outline-none" defaultValue={""} />
                        <button type="button" className="py-4 my-8 font-semibold rounded-md text-coolGray-50 bg-violet-600">Leave feedback</button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <span className="text-sm text-coolGray-100">Maybe later</span>
                </div>
            </div>







            <div className="container glass flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-coolGray-300  text-white my-4">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="avatar" className="object-cover w-12 h-12 rounded-full" />
                        </div>
                        <div>
                            <h4 className="font-bold">Leroy Jenkins</h4>
                            <span className="text-xs text-coolGray-100">2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z" />
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-coolGray-100">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                </div>
            </div>



        </div>
    )
}