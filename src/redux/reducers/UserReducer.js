import { USER_LOGIN, TOKEN } from "../../util/settings/config";
import { ThongTinTaiKhoan } from "../../_core/models/ThongTinTaiKhoan";
import { LOG_IN, SET_USER_PROFILE } from "../types/UserType";

let userDefault = {};

if (localStorage.getItem(USER_LOGIN)) {
    userDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const initialState = {
    userLogin: userDefault,
    userProfile: new ThongTinTaiKhoan()
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOG_IN: {
            const { userLogin } = action;

            localStorage.setItem(USER_LOGIN, JSON.stringify(userLogin));
            localStorage.setItem(TOKEN, userLogin.accessToken);

            return { ...state, userLogin: userLogin }
        }

        case SET_USER_PROFILE: {
            return { ...state, userProfile: action.userProfile };
        }

        default:
            return { ...state }
    }
}


export default UserReducer;