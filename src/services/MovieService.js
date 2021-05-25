import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseServices";


export class MovieService extends baseServices {
    

    getBanners = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
    }

    getMovies = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }

}

export const movieService = new MovieService();