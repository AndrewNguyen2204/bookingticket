import { SET_EDIT_MOVIE, SET_MOVIES } from "../types/MovieType";
import { movieService } from "../../services/MovieService";
import { STATUS } from "../../util/settings/config";
import { history } from '../../App';

// Normal Actions

export const setMoviesAction = (movies) => ({
    type: SET_MOVIES,
    movies
});

export const setEditMovieAction = (editMovie) => ({
    type: SET_EDIT_MOVIE,
    editMovie
})


// Thunk Actions



export const getMoviesAction = () => {


    return async (dispatch) => {
        try {
            const result = await movieService.getMovies();

            if (result.status === STATUS.SUCCESS) {
                dispatch(setMoviesAction(result.data.content));
            }



        } catch (err) {
            console.log('error', err.response?.data);
        }
    }

}

export const addMovieAction = (formData) => {

    return async (dispatch) => {

        try {

            const result = await movieService.addMovieUploadImage(formData);
            if (result.status === STATUS.SUCCESS) {
                alert('Upload success!');
            }
        } catch (err) {
            console.log('error', err.response?.data);
        }

    }
}


export const getEditMovie = (id) => {


    return async (dispatch) => {

        try {
            const result = await movieService.getMovie(id);

            if (result.status === STATUS.SUCCESS) {
                dispatch(setEditMovieAction(result.data.content))
            }

        } catch (err) {
            console.log('error', err.response?.data);
        }

    }
}

export const updateMovieAction = (formData) => {

    return async (dispatch) => {

        try {

            const result = await movieService.updateMovie(formData);

            if (result.status === STATUS.SUCCESS) {
                alert('update success!');
                dispatch(getMoviesAction());
                history.push('/dashboard/movies');
            }

        } catch (err) {
            console.log('error', err.response?.data);
        }
    }
}

export const deleteMovieAction = (id) => {

    return async (dispatch) => {

        try {

            const result = await movieService.deleteMovie(id);

            if (result.status === STATUS.SUCCESS) {
                alert('delete success!');

                dispatch(getMoviesAction());

            }

        } catch (err) {
            console.log('error', err.response?.data);
        }
    }
}