import { baseServices } from "./baseServices";


export class CinemaService extends baseServices {
    

    getCinemas = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
    }

   
}

export const cinemaService = new CinemaService();