import { cinemaService } from "../../services/CinemaService";
import { SET_CINEMAS } from "../types/CinemaType";





/** Thunk actions */

export const getCinemasAction = () => {


    return async (dispatch) => {
        try {
            const result = await cinemaService.getCinemas();
            
            dispatch({
                type: SET_CINEMAS,
                cinemas: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}