import { cinemaService } from "../../services/CinemaService";
import { SET_CINEMAS, SET_LOGOS, SET_SHOWTIMES_DATA } from "../types/CinemaType";





/** Thunk actions */

export const getLogosAction = () => {


    return async (dispatch) => {
        try {
            const result = await cinemaService.getLogos();
            
            dispatch({
                type: SET_LOGOS,
                logos: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}

export const getCinemasAction = (maHeThong) => {


    return async (dispatch) => {
        try {
            const result = await cinemaService.getCinemas(maHeThong);
            
            dispatch({
                type: SET_CINEMAS,
                cinemas: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}

export const getShowTimesByIdAction = (maHeThong) => {


    return async (dispatch) => {
        try {
            const result = await cinemaService.getShowTimesById(maHeThong);
            
            dispatch({
                type: SET_SHOWTIMES_DATA,
                data: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}