import React, { useState } from 'react';
import "./HomeCinemas.css";
import ShowTime from './ShowTime';



export default function HomeCinemas(props) {

    const { cinemasData } = props;



    const [activeLogo, setActiveLogo] = useState(0);

    const [activeCinema, setActiveCinema] = useState(0);

    const handleClickLogos = (index) => {
        setActiveLogo(index);

        setActiveCinema(0);
    }

    const handleClickCinemas = (index) => {

        setActiveCinema(index)

    }

    const renderLogos = () => {
        return cinemasData?.map((item, index) => {
            return <li key={index} className={index === activeLogo ? "active" : ""}><img src={item.logo} alt={item.maHeThongRap} onClick={() => {
                handleClickLogos(index);
            }} /></li>
        })
    }

    const renderCinemas = () => {
        const cinemas = cinemasData[activeLogo]?.lstCumRap;

        return cinemas?.map((cinema, index) => {
            return <div key={index} className={index === activeCinema ? "cinema-content active" : "cinema-content"} onClick={() => {
                handleClickCinemas(index);
            }}>

                <div className="flex">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-10 sm:w-10 sm:mb-0">
                        <img src={cinemasData[activeLogo].logo} className="w-full h-full" />
                    </div>
                    <div className="ml-2">
                        <h2 className="text-xs md:text-sm font-semibold">{cinema.tenCumRap}</h2>
                        <span className="text-xs">
                            {cinema.diaChi}
                        </span>
                    </div>
                </div>
            </div>
        })
    }
    const renderMovieList = () => {
        const movieList = cinemasData[activeLogo]?.lstCumRap[activeCinema].danhSachPhim;

        return movieList?.map((movie, index) => {
            return <ShowTime movie={movie} key={index} />
        });
    }



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
