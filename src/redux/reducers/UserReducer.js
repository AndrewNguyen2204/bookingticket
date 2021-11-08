import { USER_LOGIN, TOKEN } from "../../util/settings/config";
import { ThongTinTaiKhoan } from "../../_core/models/ThongTinTaiKhoan";
import { CLEAR_USER_EDIT, LOG_IN, LOG_OUT, SET_USERS, SET_USER_EDIT, SET_USER_PROFILE } from "../types/UserType";

let userDefault = null;

if (localStorage.getItem(USER_LOGIN)) {
    userDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const initialState = {
    userLogin: userDefault,
    userProfile: new ThongTinTaiKhoan(),
    users: [],
    userEdit: new ThongTinTaiKhoan()
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOG_IN: {
            const { userLogin } = action;

            localStorage.setItem(USER_LOGIN, JSON.stringify(userLogin));
            localStorage.setItem(TOKEN, userLogin.accessToken);

            return { ...state, userLogin: userLogin }
        }
        case LOG_OUT: {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            userDefault = {};
            return { ...state, userLogin: null }
        }

        case SET_USER_PROFILE: {
            return { ...state, userProfile: action.userProfile };
        }

        case SET_USERS: {
            return { ...state, users: action.users };
        }

        case SET_USER_EDIT: {
            return { ...state, userEdit: action.userEdit[0] };
        }

        case CLEAR_USER_EDIT: {
            return { ...state, userEdit: new ThongTinTaiKhoan() };
        }

        default:
            return { ...state}
    }
}


export default UserReducer;