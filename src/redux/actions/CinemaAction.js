import { cinemaService } from "../../services/CinemaService";
import { SET_CINEMAS_DATA, SET_MOVIE_LIST} from "../types/CinemaType";



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

