import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import CarouselReducer from "./reducers/CarouselReducer";
import CinemaReducer from './reducers/CinemaReducer';
import MovieReducer from './reducers/MovieReducer';

const rootReducer = combineReducers({
    CarouselReducer,
    MovieReducer,
    CinemaReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));