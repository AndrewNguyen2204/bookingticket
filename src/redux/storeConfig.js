import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import BookingTicketReducer from './reducers/BookingTicketReducer';
import CarouselReducer from "./reducers/CarouselReducer";
import CinemaReducer from './reducers/CinemaReducer';
import LoadingReducer from './reducers/LoadingReducer';
import MovieReducer from './reducers/MovieReducer';
import UserReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
    CarouselReducer,
    MovieReducer,
    CinemaReducer,
    UserReducer,
    BookingTicketReducer,
    LoadingReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));