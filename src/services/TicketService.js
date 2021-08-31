import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseServices } from "./baseServices";


export class TicketService extends baseServices {
    
    getRoomDetails = (id) => {
       
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
    }

    buyTicket = (info = new ThongTinDatVe()) => {
        return this.post('api/QuanLyDatVe/DatVe',info);
    }
   
    createShowtime = (info) =>{
        return this.post('api/QuanLyDatVe/TaoLichChieu',info);
    }

}

export const ticketService = new TicketService();