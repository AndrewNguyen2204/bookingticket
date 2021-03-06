import { RESET_MOVIES, SET_EDIT_MOVIE, SET_MOVIES, SET_MOVIE_DETAILS } from "../types/MovieType";


const initialState = {
    movies: [],
    defaultMovies: [],
    movieDetails: {},
    editMovie:{}
}

const MovieReducer = ((state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {

            const showingMovies = action.movies.filter(movie => movie.dangChieu);

            return { ...state, movies: showingMovies, defaultMovies: action.movies };
        }
        case RESET_MOVIES: {
            const keyReset = action.key ? "dangChieu" : "sapChieu";

            const resetMovies = state.defaultMovies.filter(movie => movie[keyReset]);

            return { ...state, movies: resetMovies }
        }
        case SET_MOVIE_DETAILS: {           
                  
            return{...state,movieDetails:action.movieDetails};
        }
        case SET_EDIT_MOVIE: {           
                      
            return{...state,editMovie:action.editMovie};
        }
        default: return { ...state };
    }
});

export default MovieReducer;