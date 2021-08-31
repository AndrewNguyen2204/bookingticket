import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseServices";


export class MovieService extends baseServices {


    getBanners = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
    }

    getMovies = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }
    addMovieUploadImage = (formData) => {
        return this.post('/api/QuanLyPhim/ThemPhimUploadHinh', formData);
    }

    getMovie = (id) =>{
        return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
    }

    updateMovie = (formData) =>{
        return this.post('api/QuanLyPhim/CapNhatPhimUpload',formData);
    }

    deleteMovie = (id) =>{
        return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${id}`);
    }

}

export const movieService = new MovieService();