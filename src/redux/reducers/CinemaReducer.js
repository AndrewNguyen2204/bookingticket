import { SET_CINEMAS, SET_LOGOS, SET_MOVIE_LIST, SET_SHOWTIMES_DATA } from "../types/CinemaType";



const initialState = {
    logos: [],
    cinemas: [],
    showtimesData: [],
    movieList: []

}

const CinemaReducer = ((state = initialState, action) => {
    switch (action.type) {
        case SET_LOGOS: {
            return { ...state, logos: action.logos };
        }
        case SET_CINEMAS: {
            return { ...state, cinemas: action.cinemas };
        }
        case SET_SHOWTIMES_DATA: {
            return { ...state, showtimesData: action.data[0].lstCumRap };
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