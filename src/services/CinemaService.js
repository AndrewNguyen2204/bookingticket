import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseServices";


export class CinemaService extends baseServices {
    

    
    getCinemasData = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }
   
   
}

export const cinemaService = new CinemaService();