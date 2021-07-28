import { baseServices } from "./baseServices";


export class UserService extends baseServices {
    
    login = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`,user);
    }
   

}

export const userService = new UserService();