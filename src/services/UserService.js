import { baseServices } from "./baseServices";


export class UserService extends baseServices {
    
    login = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`,user);
    }

    getProfile = () =>{
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
   

}

export const userService = new UserService();