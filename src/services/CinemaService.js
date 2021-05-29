import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseServices";


export class CinemaService extends baseServices {
    

    getLogos = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
    }
    getCinemas = (maHeThong) => {
        return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThong}`);
    }
    getShowTimesById = (maHeThong)=>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThong}&maNhom=${GROUPID}`);
    }
   
}

export const cinemaService = new CinemaService();