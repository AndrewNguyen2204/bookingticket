import { CLEAR_TICKETS, SET_OTHER_TICKETS, SET_ROOM_DETAILS, SET_TICKETS } from "../types/BookingTicketType";
import { ticketService } from '../../services/TicketService';
import { STATUS } from "../../util/settings/config";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { connection } from "../..";


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

export const setOtherTicketsAction = (otherTickets)=>({
    type: SET_OTHER_TICKETS,
    otherTickets
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



    return async (dispatch,getState) => {


        try {

            const result = await ticketService.buyTicket(info);
           
            if (result.status === STATUS.SUCCESS){
                alert(result.data.content);
               await dispatch(clearTicketsAction());
               let userLogin = getState().UserReducer.userLogin;

               connection.invoke('datGheThanhCong',userLogin.taiKhoan,info.maLichChieu);
            }


        }catch (err) {
            console.log('error', err);
        }
    }
}

export const checkingSeatAction = (seat,maLichChieu) => {



    return async (dispatch,getState) => {

        await dispatch(setTicketsAction(seat));

        // send checking-seats  to backend

        const taiKhoan = getState().UserReducer.userLogin.taiKhoan;

        const tickets = getState().BookingTicketReducer.tickets;

        

        const danhSachGheDangDat = JSON.stringify(tickets);

        connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);

    }
}