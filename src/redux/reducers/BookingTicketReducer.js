import { ThongTinPhongVe } from "../../_core/models/ThongTinPhongVe";
import { CLEAR_TICKETS, SET_ROOM_DETAILS, SET_TICKETS } from "../types/BookingTicketType";

const initialState = {
    roomDetails: new ThongTinPhongVe(),
    tickets: []
}

const BookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ROOM_DETAILS: {

            return { ...state, roomDetails: action.roomDetails };
        }
        case SET_TICKETS: {
            let { ticket } = action;
            let { tickets } = state;
            const index = tickets.findIndex(t => t.maGhe === ticket.maGhe);

            if (index !== -1) {
                tickets.splice(index, 1);
            } else {
                tickets.push(ticket);
            }

            return { ...state, tickets: tickets }
        }

        case CLEAR_TICKETS: {
            return { ...state, tickets: [] };
        }

        default:
            return { ...state }
    }
}


export default BookingTicketReducer;