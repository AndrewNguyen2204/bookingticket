import { SET_MOVIES } from "../types/MovieType";
import { movieService } from "../../services/MovieService";



// Thunk Action



export const getMoviesAction = () => {


    return async (dispatch) => {
        try {
            const result = await movieService.getMovies();
            
            dispatch({
                type: SET_MOVIES,
                movies: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}