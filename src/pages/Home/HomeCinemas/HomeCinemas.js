import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCinemasAction, getLogosAction } from '../../../redux/actions/CinemaAction';
import Cinema from './Cinema';
import "./HomeCinemas.css";
import ShowTime from './ShowTime';



export default function HomeCinemas() {

    const { logos, cinemas } = useSelector(state => state.CinemaReducer);

    const dispatch = useDispatch();

    const [activeLogo, setActiveLogo] = useState(0);

    const [activeCinema, setActiveCinema] = useState(0);

    const handleClickLogos = (index, item) => {
        const { maHeThongRap } = item;

        setActiveLogo(index);

        dispatch(getCinemasAction(maHeThongRap));
    }

    const handleClickCinemas = (index) => {

        setActiveCinema(index);

    }

    const renderLogos = () => {
        return logos.map((item, index) => {
            return <li key={index} className={index === activeLogo ? "active" : ""}><img src={item.logo} alt={item.maHeThongRap} onClick={() => {
                handleClickLogos(index, item);
            }} /></li>
        })
    }

    const renderCinemas = () => {
        return cinemas.map((cinema, index) => {
            return <div className={index === activeCinema ? "cinema-content active" : "cinema-content"} onClick={() => {
                handleClickCinemas(index);
            }}>

                <div className="flex flex-col">
                    <div>
                        <h2 className="text-sm font-semibold">{cinema.tenCumRap}</h2>
                        <span className="text-sm text-coolGray-600">
                            {cinema.diaChi}
                        </span>
                    </div>
                </div>
            </div>
        })
    }

    useEffect(() => {
        dispatch(getLogosAction());

        dispatch(getCinemasAction(logos[0].maHeThongRap));

    }, []);

    return (
        <div className="cinemas">
            <div className="cinemas-content">
                <div className="content-left">
                    <ul>
                        {renderLogos()}

                    </ul>
                </div>
                <div className="content-right">
                    <div className="cinema-list p-2">

                        {renderCinemas()}

                    </div>
                    <div className="showtime">

                        <ShowTime />


                    </div>
                </div>
            </div>
        </div>
    )
}
