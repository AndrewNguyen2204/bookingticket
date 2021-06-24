import { cinemaService } from "../../services/CinemaService";
import { SET_CINEMAS_DATA, SET_MOVIE_LIST} from "../types/CinemaType";
import { SET_MOVIE_DETAILS } from "../types/MovieType";



export const setMovieListAction = (maCumRap)=>({

        type: SET_MOVIE_LIST,
        maCumRap
});




/** Thunk actions */

export const getCinemasDataAction = () => {


    return async (dispatch) => {
        try {
            const result = await cinemaService.getCinemasData();
            
            dispatch({
                type: SET_CINEMAS_DATA,
                cinemasData: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}

export const getMoviesDetails = (maPhim) => {


    return async (dispatch) => {
        try {
            const result = await cinemaService.getMovieDetails(maPhim);
            console.log({result});
            dispatch({
                type: SET_MOVIE_DETAILS,
                movieDetails: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}

