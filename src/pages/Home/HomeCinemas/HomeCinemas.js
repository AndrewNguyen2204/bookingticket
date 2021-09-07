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
                    <div className="flex-shrink-0 mb-2 sm:h-12 sm:w-12 w-8 h-8 sm:mb-6">
                        <img src={cinemasData[activeLogo].logo} className="w-full h-full" />
                    </div>
                    <div className="ml-2">
                        <h2 className="text-xs md:text-sm font-semibold">{cinema.tenCumRap}</h2>
                        <span className="hidden lg:block  text-xs font-thin">
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
            <div className="cinemas-content glass">
                <div className="content-left">
                    <ul>
                        {renderLogos()}

                    </ul>
                </div>
                <div className="content-right">
                    <div className="cinema-list p-2">

                        {renderCinemas()}

                    </div>
                    <div className="showtime divide-y divide-white divide-opacity-20">

                        {renderMovieList()}


                    </div>
                </div>
            </div>
        </div>
    )
}
