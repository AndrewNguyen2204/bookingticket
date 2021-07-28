import { CLEAR_TICKETS, SET_ROOM_DETAILS, SET_TICKETS } from "../types/BookingTicketType";
import { ticketService } from '../../services/TicketService';
import { STATUS } from "../../util/settings/config";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";


export const setRoomDetailsAction = (roomDetails) => ({
    type: SET_ROOM_DETAILS,
    roomDetails
})


export const setTicketsAction = (ticket) => ({
    type: SET_TICKETS,
    ticket
})

export const clearTicketsAction = () => ({
    type: CLEAR_TICKETS
})



// Thunk Actions

export const getRoomDetailsAction = (id) => {

   
    return async (dispatch) => {
       
        try {
            const result = await ticketService.getRoomDetails(id);
           
            if(result.status === STATUS.SUCCESS){
                dispatch(setRoomDetailsAction(result.data.content));
            }
            
            

        } catch (err) {
            console.log('error', err);
        }
    }

}

export const buyTicketAction = (info = new ThongTinDatVe()) => {



    return async (dispatch) => {


        try {

            const result = await ticketService.buyTicket(info);
            
            if (result.status === STATUS.SUCCESS){
               dispatch(clearTicketsAction());
            }


        }catch (err) {
            console.log('error', err);
        }
    }
}
