import React, { useState } from 'react';
import "./HomeCinemas.css";
import ShowTime from './ShowTime';



export default function HomeCinemas(props) {

    const { cinemasData } = props;

    

    const [activeLogo, setActiveLogo] = useState(0);

    const [activeCinema, setActiveCinema] = useState(0);

    const handleClickLogos = (index) => {
        setActiveLogo(index);


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
