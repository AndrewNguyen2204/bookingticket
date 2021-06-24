import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseServices";


export class CinemaService extends baseServices {
    

    
    getCinemasData = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }

    getMovieDetails = (maPhim) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }
   
   
}

export const cinemaService = new CinemaService();