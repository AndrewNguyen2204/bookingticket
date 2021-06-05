import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCinemasAction, getLogosAction, getShowTimesByIdAction, setMovieListAction } from '../../../redux/actions/CinemaAction';
import "./HomeCinemas.css";
import ShowTime from './ShowTime';



export default function HomeCinemas() {

    const { logos, cinemas, movieList } = useSelector(state => state.CinemaReducer);
    console.log('movieList',movieList);
    const dispatch = useDispatch();

    const [activeLogo, setActiveLogo] = useState(0);

    const [activeCinema, setActiveCinema] = useState(0);

    const handleClickLogos = (index, item) => {
        const { maHeThongRap } = item;

        setActiveLogo(index);

        dispatch(getCinemasAction(maHeThongRap));

        dispatch(getShowTimesByIdAction(maHeThongRap));

        setActiveCinema(0);
    }

    const handleClickCinemas = (index, maCumRap) => {

        setActiveCinema(index);

        dispatch(setMovieListAction(maCumRap));

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
            return <div key={index} className={index === activeCinema ? "cinema-content active" : "cinema-content"} onClick={() => {
                handleClickCinemas(index, cinema.maCumRap);
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
    const renderMovieList = () => {
        return movieList?.map((movie, index) => {
            return <ShowTime movie={movie} key={index} />
        });
    }   

    useEffect(() => {
        dispatch(getLogosAction());

        dispatch(getCinemasAction(logos[0]?.maHeThongRap));

        dispatch(getShowTimesByIdAction(logos[0]?.maHeThongRap));

        // dispatch(setMovieListAction(cinemas[0]?.maCumRap));
       

    }, [logos]);

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

                        {renderMovieList()}


                    </div>
                </div>
            </div>
        </div>
    )
}
