import {  SET_CINEMAS_DATA,  SET_MOVIE_LIST } from "../types/CinemaType";



const initialState = {
    cinemasData: []
    

}

const CinemaReducer = ((state = initialState, action) => {
    switch (action.type) {
        
        case SET_CINEMAS_DATA: {
            return { ...state, cinemasData: action.cinemasData };
        }
       
        case SET_MOVIE_LIST: {

            let newShowtimesData = state.showtimesData.filter(data => data.maCumRap === action.maCumRap);
            if (newShowtimesData === null || newShowtimesData.length === 0) {
                return { ...state, movieList: [] };
            }

            let newMovieList = newShowtimesData[0].danhSachPhim;

            return { ...state, movieList: newMovieList };
        }
        default: return { ...state };
    }
});

export default CinemaReducer;