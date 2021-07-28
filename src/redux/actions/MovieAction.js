import { SET_MOVIES} from "../types/MovieType";
import { movieService } from "../../services/MovieService";
import { STATUS } from "../../util/settings/config";


// Normal Actions

export const setMoviesAction = (movies) => ({
    type: SET_MOVIES,
    movies
})


// Thunk Actions



export const getMoviesAction = () => {


    return async (dispatch) => {
        try {
            const result = await movieService.getMovies();

            if(result.status === STATUS.SUCCESS){
                dispatch(setMoviesAction(result.data.content));
            }
            
            

        } catch (err) {
            console.log('error', err);
        }
    }

}

