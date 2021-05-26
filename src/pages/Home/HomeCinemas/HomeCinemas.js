import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCinemasAction } from '../../../redux/actions/CinemaAction';
import "./HomeCinemas.css";



export default function HomeCinemas() {

    const { cinemas, currentCinemas } = useSelector(state => state.CinemaReducer);
    const dispatch = useDispatch();
   

    const renderCinemas = () => {
        return cinemas.map((cinema, index) => {
            return <li key={index}><img src={cinema.logo} alt={cinema.maHeThongRap} /></li>
        })
    }

    const renderCinemasContent = () => {
        return currentCinemas.map((cinema, index) => {
            return (
                <div className="cinema-content" key={index}>

                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-sm font-semibold">{cinema.tenCumRap}</h2>
                            <span className="text-sm text-coolGray-600">
                                {cinema.diaChi}
                            </span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    useEffect(() => {
        dispatch(getCinemasAction());
    }, [dispatch]);

    return (
        <div className="cinemas">
            <div className="cinemas-content">
                <div className="content-left">
                    <ul>
                        {renderCinemas()}

                    </ul>
                </div>
                <div className="content-right">
                    <div className="cinema-list p-2">

                        {renderCinemasContent()}

                    </div>
                    <div className="showtime">

                        <div className="showtime-content">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-10 sm:w-10 sm:mb-0">
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="abc" />
                            </div >
                            <div className="flex w-full">
                                <div className="w-full">
                                    <h2 className="text-sm font-semibold">Movie's Name</h2>
                                    <span className="text-sm text-coolGray-600">Movie's infomations</span>
                                    <div className="showtime-details">
                                        <span>12:00</span>
                                        <span>14:00</span>
                                        <span>16:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
