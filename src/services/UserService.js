import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseServices";


export class UserService extends baseServices {

    login = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, user);
    }

    getProfile = () => {
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }

    signup = (user) => {
       
        return this.post('api/QuanLyNguoiDung/DangKy', user);
    }
    getUsers = () => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`);
    }

    addUser = (user) => {
        return this.post('api/QuanLyNguoiDung/ThemNguoiDung', user);
    }

    updateUser = (user) => {
        return this.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', user);
    }

    editUser = (user) => {
        return this.post('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', user);
    }

    deleteUser = (account) => {
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`)
    }

    searchUser = (account) => {
        return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${account}`);
    }

}

export const userService = new UserService();